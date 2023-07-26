const bcrypt = require("bcrypt");
const { User, Case, Category, Finished, Interested } = require("./index");

exports.addDummyData = async () => {
    try {
        const password = bcrypt.hashSync("1234",10)
        await User.create({name: "user", password});
        await User.create({name: "user1", password});
        await User.create({name: "user2", password});

        const category1 = await Category.create({ name : "사기" });
        const category2 = await Category.create({ name : "절도" });

        await Case.create({ title: "dfdfdfdf", detail : "d", reason:"df", case_num : "sdfsdf", category_id : category1.id});
        await Case.create({ title: "df", detail : "d", reason:"d", case_num : "sdfsdf", category_id : category1.id});
        await Case.create({ title: "d", detail : "d", reason:"dd", case_num : "sdfsdf", category_id : category1.id});
        await Case.create({ title: "d", detail : "df", reason: "d", case_num : "sdfsdf", category_id : category1.id});
        await Case.create({ title: "d", detail : "d",reason :"df", case_num : "sdfsdf", category_id : category2.id});
        await Case.create({ title: "f", detail : "f", reason: "dfdf", case_num : "sdfsdf", category_id : category2.id});
        await Case.create({ title: "d", detail : "ff", reason:"f", case_num : "sdfsdf", category_id : category2.id});

        await Finished.create({user_id:1, case_id : 1, result : 12});
        await Finished.create({user_id:2, case_id : 1, result : 1});

        await Finished.create({user_id:1, case_id : 2, result : 3});
        await Finished.create({user_id:2, case_id : 2, result : 2});
    } catch (error) {
        console.log(error)
    }

}




