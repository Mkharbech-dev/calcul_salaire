var inputText = document.querySelectorAll("input[type=tel]")
var inputsLength = inputText.length;

    for(var i = 0; i < inputsLength; i++) {

        inputText[i].addEventListener("keyup", function() {
            calculSalaire(this.id); 
        });
    }

    var taux = 23 ;
    var smicAnnuel = 18000
    var smicmensuel = 1500
    var smicHeure = 9.89
    var smicJournalier = 69.2136

    var sn = document.querySelector('.sn')
    var sb = document.querySelector('.sb')
    var deff = document.querySelector('.deff')
    var tauxInput = document.querySelector('.tc')
    var optionTaux = document.getElementById('taux')

    input = document.getElementById("annuelBrut")
    function testCheckBox(){
       
		if(document.getElementById('cadre').checked)
		{
            taux = 25
            calculSalaire(input.id)
            // console.log(input.id)
            sn.innerHTML = document.getElementById("mensuelNet").value
            sb.innerHTML = document.getElementById("mensuelBrut").value
            deff.innerHTML = (parseFloat((document.getElementById("mensuelBrut").value)) - parseFloat((document.getElementById("mensuelNet").value))).toFixed(2)
            tauxInput.innerHTML = '25%' 
            optionTaux.value = 'Taux%: 25'
		}else if (document.getElementById('fonc').checked){
            taux = 1
            calculSalaire(input.id)
            sn.innerHTML = document.getElementById("mensuelNet").value
            sb.innerHTML = document.getElementById("mensuelBrut").value
            deff.innerHTML = (parseFloat((document.getElementById("mensuelBrut").value)) - parseFloat((document.getElementById("mensuelNet").value))).toFixed(2)
            tauxInput.innerHTML = '1%' 
            optionTaux.value = 'Taux%: 1' 
        }else if (document.getElementById('portage').checked){
            taux = 50
            calculSalaire(input.id)
            sn.innerHTML = document.getElementById("mensuelNet").value
            sb.innerHTML = document.getElementById("mensuelBrut").value
            deff.innerHTML = (parseFloat((document.getElementById("mensuelBrut").value)) - parseFloat((document.getElementById("mensuelNet").value))).toFixed(2)
            tauxInput.innerHTML = '50%'
            optionTaux.value = 'Taux%: 50'
        }else if (document.getElementById('indep').checked){
            taux = 45
            calculSalaire(input.id)
            sn.innerHTML = document.getElementById("mensuelNet").value
            sb.innerHTML = document.getElementById("mensuelBrut").value
            deff.innerHTML = (parseFloat((document.getElementById("mensuelBrut").value)) - parseFloat((document.getElementById("mensuelNet").value))).toFixed(2)
            tauxInput.innerHTML = '45%'
            optionTaux.value = 'Taux%: 45'
        }else if (document.getElementById('entrep').checked){
            taux = 25
            calculSalaire(input.id)
            sn.innerHTML = document.getElementById("mensuelNet").value
            sb.innerHTML = document.getElementById("mensuelBrut").value
            deff.innerHTML = (parseFloat((document.getElementById("mensuelBrut").value)) - parseFloat((document.getElementById("mensuelNet").value))).toFixed(2)
            tauxInput.innerHTML = '25%' 
            optionTaux.value = 'Taux%: 25'
        }else{
            taux = 23
            calculSalaire(input.id)
            sn.innerHTML = document.getElementById("mensuelNet").value
            sb.innerHTML = document.getElementById("mensuelBrut").value
            deff.innerHTML = (parseFloat((document.getElementById("mensuelBrut").value)) - parseFloat((document.getElementById("mensuelNet").value))).toFixed(2)
            tauxInput.innerHTML = '23%'
            optionTaux.value = 'Taux%: 23' 
        }	
    }
    document.getElementById('smic').addEventListener('click', function(){
            input.value = 17496
            calculSalaire(input.id)
            sn.innerHTML = document.getElementById("mensuelNet").value
            sb.innerHTML = document.getElementById("mensuelBrut").value
            deff.innerHTML = (parseFloat((document.getElementById("mensuelBrut").value)) - parseFloat((document.getElementById("mensuelNet").value))).toFixed(2)
            tauxInput.innerHTML = '23%' 
            optionTaux.value = 'Taux%: 23' 
    })
    

    function calculSalaire(typeDeMontantDeDepart){
        let param = typeDeMontantDeDepart
	
        var annuelBrut = document.getElementById("annuelBrut").value;
        // console.log(Math.round(annuelBrut * (1 - taux /100)))
        var annuelNet = document.getElementById("annuelNet").value;
        var mensuelBrut =document.getElementById("mensuelBrut").value;
        var mensuelNet = document.getElementById("mensuelNet").value;
        var journalierBrut = document.getElementById("journalierBrut").value;
        var journalierNet = document.getElementById("journalierNet").value;
        var horaireBrut = document.getElementById("horaireBrut").value;
        var horaireNet = document.getElementById("horaireNet").value;
    
        if( isNaN(typeDeMontantDeDepart) || typeDeMontantDeDepart == "") {
            typeDeMontantDeDepart = 0 ;
        }
 
        switch (param) {
            case 'annuelBrut':
                document.getElementById("annuelNet").value = Math.round((annuelBrut * (1 - taux /100))*100)/100+ " €"
                document.getElementById("mensuelBrut").value = Math.round((annuelBrut /12)*100)/100+ " €"
                document.getElementById("mensuelNet").value = Math.round(((annuelBrut /12)* (1 - taux /100))*100)/100+" €"
                document.getElementById("journalierBrut").value = Math.round((((annuelBrut*smicJournalier)/smicAnnuel))*100)/100+ " €"
                document.getElementById("journalierNet").value = Math.round(((((annuelBrut*smicJournalier)/smicAnnuel)* (1 - taux /100)))*100)/100+" €"
                document.getElementById("horaireBrut").value = Math.round(((annuelBrut*smicHeure)/smicAnnuel)*100)/100+ " €"
                document.getElementById("horaireNet").value = Math.round((((annuelBrut*smicHeure)/smicAnnuel)* (1 - taux /100))*100)/100+ " €"
                sn.innerHTML = document.getElementById("mensuelNet").value
                sb.innerHTML = document.getElementById("mensuelBrut").value
                deff.innerHTML =(parseFloat((document.getElementById("mensuelBrut").value)) - parseFloat((document.getElementById("mensuelNet").value))).toFixed(2)
                tauxInput.innerHTML = '23%'   
            break;
            case 'annuelNet':
                document.getElementById("annuelBrut").value = Math.round((annuelNet / (1 - taux /100))*100)/100+ " €"
                document.getElementById("mensuelBrut").value = Math.round((annuelNet / (1 - taux /100) /12)*100)/100+ " €"
                document.getElementById("mensuelNet").value = Math.round(((annuelNet / (1 - taux /100) /12)* (1 - taux /100))*100)/100+" €"
                document.getElementById("journalierBrut").value = Math.round((((annuelNet / (1 - taux /100)*smicJournalier)/smicAnnuel))*100)/100+ " €"
                document.getElementById("journalierNet").value = Math.round((((((annuelNet / (1 - taux /100))*smicJournalier)/smicAnnuel)* (1 - taux /100)))*100)/100+" €"
                document.getElementById("horaireBrut").value = Math.round((((annuelNet / (1 - taux /100))*smicHeure)/smicAnnuel)*100)/100+ " €"
                document.getElementById("horaireNet").value = Math.round(((((annuelNet / (1 - taux /100))*smicHeure)/smicAnnuel)* (1 - taux /100))*100)/100+ " €"
                sn.innerHTML = document.getElementById("mensuelNet").value
                sb.innerHTML = document.getElementById("mensuelBrut").value
                deff.innerHTML =(parseFloat((document.getElementById("mensuelBrut").value)) - parseFloat((document.getElementById("mensuelNet").value))).toFixed(2)
                tauxInput.innerHTML = '23%'  
            break;
            case 'mensuelBrut':
                document.getElementById("annuelBrut").value = Math.round((mensuelBrut*12)*100)/100+ " €"
                document.getElementById("annuelNet").value = Math.round(((mensuelBrut * 12) * (1 - taux /100))*100)/100+ " €"
                document.getElementById("mensuelNet").value = Math.round((mensuelBrut * (1 - taux /100))*100)/100+" €"
                document.getElementById("journalierBrut").value = Math.round((((mensuelBrut * smicJournalier)/smicmensuel))*100)/100+ " €"
                document.getElementById("journalierNet").value = Math.round((((((mensuelBrut * smicJournalier)/smicmensuel))* (1 - taux /100)))*100)/100+" €"
                document.getElementById("horaireBrut").value = Math.round(((mensuelBrut * smicHeure)/smicmensuel)*100)/100+ " €"
                document.getElementById("horaireNet").value = Math.round((((mensuelBrut * smicHeure)/smicmensuel)* (1 - taux /100))*100)/100+ " €"
                sn.innerHTML = document.getElementById("mensuelNet").value
                sb.innerHTML = document.getElementById("mensuelBrut").value
                deff.innerHTML =(parseFloat((document.getElementById("mensuelBrut").value)) - parseFloat((document.getElementById("mensuelNet").value))).toFixed(2)
                tauxInput.innerHTML = '23%'  
            break;
            case 'mensuelNet':
                document.getElementById("mensuelBrut").value = Math.round((mensuelNet / (1 - taux /100))*100)/100+ " €"
                document.getElementById("annuelBrut").value = Math.round(((mensuelNet / (1 - taux /100))*12)*100)/100+ " €"
                document.getElementById("annuelNet").value = Math.round((((mensuelNet / (1 - taux /100))*12) * (1 - taux /100))*100)/100+ " €"
                document.getElementById("journalierBrut").value = Math.round(((((mensuelNet / (1 - taux /100)) * smicJournalier)/smicmensuel))*100)/100+ " €"
                document.getElementById("journalierNet").value = Math.round(((((((mensuelNet / (1 - taux /100)) * smicJournalier)/smicmensuel))* (1 - taux /100)))*100)/100+" €"
                document.getElementById("horaireNet").value = Math.round((((mensuelNet /(1 - taux /100))* smicHeure / smicmensuel)* (1 - taux /100))*100)/100+ " €"
                document.getElementById("horaireBrut").value = Math.round(((mensuelNet /(1 - taux /100))* smicHeure / smicmensuel)*100)/100+ " €"
                sn.innerHTML = document.getElementById("mensuelNet").value
                sb.innerHTML = document.getElementById("mensuelBrut").value
                deff.innerHTML =(parseFloat((document.getElementById("mensuelBrut").value)) - parseFloat((document.getElementById("mensuelNet").value))).toFixed(2)
                tauxInput.innerHTML = '23%'  
            break;
            case 'journalierBrut':
                document.getElementById("annuelBrut").value = Math.round(((journalierBrut * smicAnnuel)/smicJournalier)*100)/100+ " €"
                document.getElementById("annuelNet").value = Math.round((((journalierBrut * smicAnnuel)/smicJournalier) * (1 - taux /100))*100)/100+ " €"
                document.getElementById("mensuelBrut").value = Math.round(((journalierBrut * smicmensuel)/smicJournalier)*100)/100+ " €"
                document.getElementById("mensuelNet").value = Math.round(((journalierBrut * smicmensuel)/smicJournalier) * (1 - taux /100)*100)/100+ " €"
                document.getElementById("journalierNet").value = Math.round((journalierBrut* (1 - taux /100) )*100)/100+" €"
                document.getElementById("horaireBrut").value = Math.round(((journalierBrut)* smicHeure / smicJournalier)*100)/100+ " €"
                document.getElementById("horaireNet").value = Math.round((((journalierBrut)* smicHeure / smicJournalier)* (1 - taux /100))*100)/100+ " €"
                sn.innerHTML = document.getElementById("mensuelNet").value
                sb.innerHTML = document.getElementById("mensuelBrut").value
                deff.innerHTML =(parseFloat((document.getElementById("mensuelBrut").value)) - parseFloat((document.getElementById("mensuelNet").value))).toFixed(2)
                tauxInput.innerHTML = '23%'  
                
            break;
            case 'journalierNet':
                document.getElementById("journalierBrut").value = Math.round((journalierNet /(1 -(taux/100)))*100)/100+ " €"
                document.getElementById("mensuelBrut").value = Math.round(((journalierNet /(1 -(taux/100)) * smicmensuel)/smicJournalier)*100)/100+ " €"
                document.getElementById("mensuelNet").value = Math.round(((journalierNet /(1 -(taux/100)) * smicmensuel)/smicJournalier)* (1 - (taux /100))*100)/100+ " €"
                document.getElementById("annuelBrut").value = Math.round((((journalierNet /(1 -(taux/100)) * smicmensuel)/smicJournalier) * 12)*100)/100+ " €"
                document.getElementById("annuelNet").value = Math.round(((((journalierNet /(1 -(taux/100)) * smicmensuel)/smicJournalier) *12)*  (1 - taux /100))*100)/100+ " €"
                document.getElementById("horaireNet").value = Math.round(((journalierNet)* smicHeure / smicJournalier)*100)/100+ " €"
                document.getElementById("horaireBrut").value = Math.round((((journalierNet)* smicHeure /smicJournalier) / (1 - taux /100))*100)/100+ " €"
                sn.innerHTML = document.getElementById("mensuelNet").value
                sb.innerHTML = document.getElementById("mensuelBrut").value
                deff.innerHTML =(parseFloat((document.getElementById("mensuelBrut").value)) - parseFloat((document.getElementById("mensuelNet").value))).toFixed(2)
                tauxInput.innerHTML = '23%'  
            break;
            case 'horaireBrut':
                document.getElementById("horaireNet").value = Math.round((horaireBrut * (1 - taux /100))*100)/100+ " €"
                document.getElementById("journalierBrut").value = Math.round(((horaireBrut * smicJournalier)/smicHeure)*100)/100+ " €"
                document.getElementById("journalierNet").value = Math.round(((horaireBrut * smicJournalier)/smicHeure *(1 - taux /100))*100)/100+ " €"
                document.getElementById("mensuelBrut").value = Math.round(((horaireBrut * smicmensuel)/smicHeure)*100)/100+ " €"
                document.getElementById("mensuelNet").value = Math.round((((horaireBrut * smicmensuel)/smicHeure) *(1 - taux /100))*100)/100+ " €"
                document.getElementById("annuelBrut").value = Math.round((((horaireBrut * smicmensuel)/smicHeure)  * 12)*100)/100+ " €"
                document.getElementById("annuelNet").value = Math.round(((((horaireBrut * smicmensuel)/smicHeure)*12)  * (1 - taux /100))*100)/100+ " €"
                sn.innerHTML = document.getElementById("mensuelNet").value
                sb.innerHTML = document.getElementById("mensuelBrut").value
                deff.innerHTML =(parseFloat((document.getElementById("mensuelBrut").value)) - parseFloat((document.getElementById("mensuelNet").value))).toFixed(2)
                tauxInput.innerHTML = '23%'  

            break;
            case 'horaireNet':
                document.getElementById("horaireBrut").value = Math.round((horaireNet / (1 - taux /100))*100)/100+ " €"
                document.getElementById("journalierBrut").value = Math.round((((horaireNet /(1 -(taux/100)) * smicJournalier)/smicHeure))*100)/100+ " €"
                document.getElementById("journalierNet").value = Math.round(((((horaireNet /(1 -(taux/100)) * smicJournalier)/smicHeure)) *(1 - taux /100))*100)/100+ " €"
                document.getElementById("mensuelBrut").value = Math.round(((smicmensuel*horaireNet)/(smicHeure*(1-(taux/100))))*100)/100+ " €"
                document.getElementById("mensuelNet").value = Math.round((((smicmensuel*horaireNet)/(smicHeure*(1-(taux/100))))*(1-(taux/100))) *100)/100+ " €"
                document.getElementById("annuelBrut").value = Math.round(((smicmensuel*horaireNet)/(smicHeure*(1-(taux/100))) * 12)*100)/100+ " €"
                document.getElementById("annuelNet").value = Math.round((((smicmensuel*horaireNet)/(smicHeure*(1-(taux/100))) * 12)  * (1 - taux /100))*100)/100+ " €"
                sn.innerHTML = document.getElementById("mensuelNet").value
                sb.innerHTML = document.getElementById("mensuelBrut").value
                deff.innerHTML =(parseFloat((document.getElementById("mensuelBrut").value)) - parseFloat((document.getElementById("mensuelNet").value))).toFixed(2)
                tauxInput.innerHTML = '23%'  
            break;
    
            default:
                // console.log('ko');
        }
    }








// document.getElementById('taux').addEventListener('click', function(){
    //     taux = 23
    //     calculSalaire(input.id)
    //         sn.innerHTML = document.getElementById("mensuelNet").value
    //         sb.innerHTML = document.getElementById("mensuelBrut").value
    //         deff.innerHTML = (document.getElementById("mensuelBrut").value) -(document.getElementById("mensuelNet").value)
    //         tauxInput.innerHTML = '23%'  
    // })
    // document.getElementById('mois').addEventListener('click', function(){
    //     taux = 23
    //     calculSalaire(input.id)
    //         sn.innerHTML = document.getElementById("mensuelNet").value
    //         sb.innerHTML = document.getElementById("mensuelBrut").value
    //         deff.innerHTML = (document.getElementById("mensuelBrut").value) -(document.getElementById("mensuelNet").value) 
    // })
    // document.getElementById('heure').addEventListener('click', function(){
    //     taux = 23
    //     calculSalaire(input.id)
    //         sn.innerHTML = document.getElementById("mensuelNet").value
    //         sb.innerHTML = document.getElementById("mensuelBrut").value
    //         deff.innerHTML = (document.getElementById("mensuelBrut").value) -(document.getElementById("mensuelNet").value) 
    // })
		
// ************************************************************************
// Cette fonction permet de formatter une valeur de base
// function formatterValeurInput(valeurNonFormattee) {

// 	var valeurFormattee;

// 	// Remplace les virgules par des points
// 	valeurFormattee = valeurNonFormattee.replace(",",'.');
   
    

// 	// Remplace tous les caractères non numérique par du vide
// 	valeurFormattee = valeurNonFormattee.replace(/\D/g,'');

// 	// parseInt, évite d'avoir des espaces...
// 	valeurFormattee = parseInt(valeurFormattee);

// 	return valeurFormattee;
// }

    // **************************************************************************
// for(var i=0; i<tabCalcul.length; i++){
//     console.log(tabCalcul[i])
//     console.log(param);
//     // var montant = formatterValeurInput(document.getElementById(param).value);
//     console.log(document.getElementById("'"+tabCalcul[i]+"'").value)
//     // console.log(Math.round(annuelBrut * (1 - taux /100)))
//     // var annuelNet = formatterValeurInput(document.getElementById("annuelNet").value);
//     // var mensuelBrut = formatterValeurInput(document.getElementById("mensuelBrut").value);
//     // var mensuelNet = formatterValeurInput(document.getElementById("mensuelNet").value);
//     // var journalierBrut = formatterValeurInput(document.getElementById("journalierBrut").value);
//     // var journalierNet = formatterValeurInput(document.getElementById("journalierNet").value);
//     // var horaireBrut = formatterValeurInput(document.getElementById("horaireBrut").value);
//     // var horaireNet = formatterValeurInput(document.getElementById("horaireNet").value);


//     document.getElementById("'"+tabCalcul[i + 1]+"'").value = Math.round((montant * (1 - taux /100))*100)/100+ " €"
//     document.getElementById("'"+tabCalcul[i + 1]+"'").value = Math.round((montant /12)*100)/100+ " €"
//     document.getElementById("'"+tabCalcul[i + 1]+"'").value = Math.round(((montant /12)* (1 - taux /100))*100)/100+" €"
//     document.getElementById("'"+tabCalcul[i + 1]+"'").value = Math.round((((montant*smicJournalier)/smicAnnuel))*100)/100+ " €"
//     document.getElementById("'"+tabCalcul[i + 1]+"'").value = Math.round(((((montant*smicJournalier)/smicAnnuel)* (1 - taux /100)))*100)/100+" €"
//     document.getElementById("'"+tabCalcul[i + 1]+"'").value = Math.round(((montant*smicHeure)/smicAnnuel)*100)/100+ " €"
    // document.getElementById("'"+tabCalcul[i + 1]+"'").value = Math.round((((montant*smicHeure)/smicAnnuel)* (1 - taux /100))*100)/100+ " €"

 


