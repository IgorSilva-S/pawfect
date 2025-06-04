const express = require("express");
const router = express.Router();

const { registerSchema, loginSchema, updateUserSchema } = require("../schemas/user");
const { hashPassword, comparePassword } = require("../utils/bcrypt");
const { generateToken } = require("../utils/jwt");
const { verifyToken } = require("../utils/jwt")
const { authenticateToken } = require("../middlewares/auth");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create User
router.post("/new", async (req, res) => {
  try {
    // Getting user info
    const { name, email, password, phone, address } = registerSchema.parse(req.body);

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser && existingUser.deleted == false) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    if (existingUser && existingUser.deleted == true) {
      // Update old user with data
      const fNewUser = await prisma.user.update({
        where: { email: existingUser.email },
        data: {
          name,
          email,
          password: hashedPassword,
          phone,
          address,
          deleted: false
        }
      })

      // Remove password before sending response
      delete fNewUser.password;

      res.status(201).json({ message: "User created", user: fNewUser });
    } else {
      // Create user
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          phone,
          address
        },
      });

      // Remove password before sending response
      delete newUser.password;

      res.status(201).json({ message: "User created", user: newUser });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// User Login
router.post("/login", async (req, res) => {
  try {
    // Getting username and password
    const { email, password } = loginSchema.parse(req.body);

    // Find user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid user" });
    }

    // Compare password
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid user" });
    }

    // Generate token
    const token = generateToken({ id: user.id, email: user.email, name: user.name });

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
router.put("/edit/:un", async (req, res) => {
  try {
    // Getting user updated info
    const { name, email, password, phone, address } = updateUserSchema.parse(req.body);
    // Getting user username (essential)
    const { un } = req.params
    let existingUser

    // Check if user exists
    try {
      existingUser = await prisma.user.findUnique({ where: { email: un } });
    } catch {
      return res.status(400).json({ message: 'Insert email!' })
    }

    if (existingUser) {
      // Hash password
      let hashedPassword
      try {
        hashedPassword = await hashPassword(password);
      } catch {
        console.log('No password inserted')
        hashedPassword = existingUser.password;
      }

      // Edit user
      const editUser = await prisma.user.update({
        where: { email: un },
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
    const { un } = req.params;
    let user
    try {
      user = await prisma.user.findUnique({ where: { email: un } })
    } catch (err) {
      return res.status(400).json({ message: 'Insert email!', cError: err })
    }

    if (user) {
      // Get the user from database and delete
      await prisma.user.update({
        where: { email: un },
        data: {
          deleted: true
        }
      })

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

router.get("/list/all", async (req, res) => {
  try {
    let users = await prisma.user.findMany();
    users.forEach((user) => {
      delete user.password

      if (user.deleted == true) {
        let userPart = users.indexOf(user)
        if (userPart > -1) {
          users.splice(userPart, 1)
        }
      }
    })
    return res.status(200).json({
      success: true,
      status: 200,
      message: 'Users listed.',
      data: { users },
    });
  } catch (error) {
    return res.status(400).json({ message: error });
  }

})

router.get("/list/:email", async (req, res) => {
  try {
    const { email } = req.params
    let user
    try {
      user = await prisma.user.findUnique({ where: { email } })
    } catch {
      return res.status(400).json({ message: 'Insert email!' })
    }

    if (user && user.deleted == false) {
      delete user.password
      return res.status(200).json({
        success: true,
        status: 200,
        message: `Get specific user: ${user.name}`,
        data: { user }
      })
    } else {
      return res.status(404).json({ message: `Can't found ${email}` })
    }

  } catch (err) {
    return res.status(400).json({ message: err })
  }
})


// router.get("/whoami", async (req, res) => {
//   const { token } = req.body

//   try {
//       const user = verifyToken(token)

//       return res.status(200).json({ you_are: user.})
//   } catch {

//   }
// })

router.get('/list/force/all', async (req, res) => {
  try {
    let users = await prisma.user.findMany();
    users.forEach((user) => {
      delete user.password
    })
    return res.status(200).json({
      success: true,
      status: 200,
      message: 'Users listed - Forced.',
      data: { users },
    });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
})

router.get('/list/force/:email', async (req, res) => {
  try {
    const { email } = req.params
    let user
    try {
      user = await prisma.user.findUnique({ where: { email } })
    } catch {
      return res.status(400).json({ message: 'Insert email!' })
    }

    if (user) {
      delete user.password
      if (!user.deleted) {
        return res.status(200).json({
          success: true,
          status: 200,
          message: `Get specific user: ${user.name}`,
          data: { user }
        })
      } else {
        return res.status(202).json({
          success: true,
          status: 200,
          message: `Get specific user: ${user.name}`,
          warning: 'This user is soft-deleted',
          data: { user }
        })
      }
    } else {
      return res.status(404).json({ message: `Can't found ${email}` })
    }

  } catch (err) {
    return res.status(400).json({ message: err })
  }
})

router.get("/endP", (req, res) => {
  try {
    return res.status(200).json({ Program: "Pawfect", Type: "BackEnd", EndPoint: "User", Status: "Working" })
  } catch (err) {
    return res.status(400).json({ Program: "Pawfect", Type: "BackEnd", EndPoint: "User", Status: "Not working", Error: err.message })
  }
})
module.exports = router;