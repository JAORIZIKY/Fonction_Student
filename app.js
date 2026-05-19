let students = (prenom, filiere, age, sexe) => {
    let classe = ""
    let Subject = ""
    if (age >= 18){
        classe = "majeur"
    }
    else{
        classe = "encore mineur"
    }
    if (sexe == "M"){
        Subject = "Il"
    }
    else{
        Subject = "Elle"
    }

    console.log(`${prenom} suis à la filière ${filiere}`)
    console.log(`${Subject} est ${classe} ${age} ans`) 
}   


students("JkQ9", "informatique", 21, "M")
students("JS", "informatique", 14, "F")
