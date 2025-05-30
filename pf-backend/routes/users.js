const express = require("express");
const router = express.Router();

const { registerSchema, loginSchema, updateUserSchema } = require("../schemas/user");
const { hashPassword, comparePassword } = require("../utils/bcrypt");
const { generateToken } = require("../utils/jwt");
const { authenticateToken } = require("../middlewares/auth");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create User
router.post("/new", async (req, res) => {
  try {
    // Getting user info
    const { name, username, email, password, phone, address } = registerSchema.parse(req.body);

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const newUser = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
        phone,
        address
      },
    });

    // Remove password before sending response
    delete newUser.password;

    res.status(201).json({ message: "User created", user: newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// User Login
router.post("/login", async (req, res) => {
  try {
    // Getting username and password
    const { username, password } = loginSchema.parse(req.body);

    // Find user
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: "Invalid username" });
    }

    // Compare password
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate token
    const token = generateToken({ id: user.id, username: user.username });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// User profile
router.get("/profile", authenticateToken, async (req, res) => {
  res.status(200).json({ message: "User profile", user: req.user });
});

// Editing user
router.put("/edit", async (req, res) => {
  try {
    // Getting user updated info
    const { name, email, password, phone, address } = updateUserSchema.parse(req.body);
    // Getting user username (essential)
    const username = req.body.username
    let existingUser

    // Check if user exists
    try {
       existingUser = await prisma.user.findUnique({ where: { username } });
    } catch {
      return res.status(400).json({ message: 'Insert username!'})
    }

    if (existingUser) {
      // Hash password
      const hashedPassword = await hashPassword(password);

      // Edit user
      const editUser = await prisma.user.update({
        where: { username: username },
        data: {
          name,
          email,
          password: hashedPassword,
          phone,
          address
        },
      });

      // Remove password before sending response
      delete editUser.password;

      res.status(201).json({ message: "User edited", user: editUser });
    } else {
      return res.status(400).json({ message: "Can't found user" });
    }

  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.delete("/del/:un", async (req, res) => {
  try {
    // Getting username (essential)
    const {un} = req.params;
    let user
    try {
      user = await prisma.user.findUnique({ where: {username: un} })
    } catch (err) {
      return res.status(400).json({ message: 'Insert username!', cError: err })
    }

    if (user) {
      // Get the user from database and delete
      await prisma.user.delete( { where: {username: un} } )

      return res.status(200).json({
        success: true,
        status: 200,
        message: 'User deleted.',
      });
    } else {
      return res.status(400).json({ message: "Can't found user" });
    }

  } catch (err) {
    return res.status(400).json({ message: err })
  }
})

router.get("/exposeAll", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return res.status(200).json({
      success: true,
      status: 200,
      message: 'Users listed.',
      data: { users },
    });
  } catch (error) {
    return res.status(400).json({message: error});
  }

})

router.get("/exposeSpecific/:username", async (req, res) => {
  try {
    const {username} = req.params
    let user
    try {
      user = await prisma.user.findUnique({ where: {username} })
    } catch {
      return res.status(400).json({message: 'Insert username!'})
    }

    if (user) {
      return res.status(200).json({
        success: true,
        status: 200,
        message: `Get specific user: ${username}`,
        data: {user}
      })
    } else {
      return res.status(404).json({message: `Can't found ${username}`})
    }

  } catch (err) {
    return res.status(400).json({message: err})
  }
})
module.exports = router;