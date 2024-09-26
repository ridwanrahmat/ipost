const express = require('express')
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

const getAllUser = async (req, res) => {
    const user = await prisma.user.findMany()
    res.json(user)
    return
}

module.exports = {
    getAllUser
}