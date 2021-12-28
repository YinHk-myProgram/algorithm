//Reverse an array
	for (int i=0;i<anArray.length-1;i++){
		int temp = anArray[i];
		anArray[i] = anArray[n-1-i];
		anArray[n-1-i] = temp;
	}

