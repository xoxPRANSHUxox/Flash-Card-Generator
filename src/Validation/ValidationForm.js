import * as Yup from "yup";

const ValidationForm = yup.object({
    groupName: Yup.string()
    .min(3, "Group name must be min 3 character.")
    .max(20, "Group name must be between 3 to 20 character.")
    .required("!!Required!!"),

    groupDescripton: Yup.string()
    .min(20,"Description should be min 20 characters")
    .max(300, "Description allowed only upto 300 characters.")
    .required("!!Required!!"),
    
    term: Yup.array(
        Yup.object({
            termName: Yup.string()
            .min(3, "Term name must be in 3 characters.")
            .max(20, "Term name must be less than 20 characters.")
            .required("Required!"),
             
            termDefination: Yup.string()
            .min(20, "Term Defination must be in 3 characters.")
            .max(500, "Term Defination must be less than 500 characters.")
            .required("Required!"),
        })
    ),
});

export default ValidationForm;