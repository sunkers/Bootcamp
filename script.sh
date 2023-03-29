#!/bin/bash
 #echo $PATH
 
echo "Entrez vos notes : "
read note

function appreciation()
{
	echo "Votre note: " $1
	if (( $1 >= 16 )) && (( $1 <= 20 ))
	then
	    echo "Appréciation: Très bien"
	elif (( $1 >= 14 )) && (( $1 <= 15 ))
	then
	    echo "Appréciation: Bien"
	elif (( $1 >= 12 )) && (( $1 <= 13 ))
	then
	    echo "Appréciation: Assez bien"
	elif (( $1 >= 10 )) && (( $1 <= 11 ))
	then
	    echo "Appréciation: Moyen"
	else
	    echo "Appréciation: Insuffisant"
	fi
}

appreciation $note