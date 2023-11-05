const { prisma } = require("../config/config");


// add recipe controller
const add_recipe = async(req, res) => {

    try {

        const { title, description, cookingInst, nutritionInfo } = req.body;
        const userId = req.existUser.id
        console.log('useId', userId)
        const add_recipe = await prisma.recipes.create({
            data: {
                title: title,
                description: description,
                cookingInst: cookingInst,
                nutritionInfo: nutritionInfo,
                userId: userId
            }
        })

        if (!add_recipe) {
            res.json({
                status: false,
                message: 'something went wrong'
            })
        } else {
            res.json({
                status: true,
                message: 'successfull added recipe...'
            })
        }

    } catch (error) {
        res.json({
            status: false,
            message: `${error.message}`
        })
    }

}


// fetch all recipes controller


module.exports = {
    add_recipe
}