function roundOff(value, precision)
{
	if (isNaN(value) || isNaN(precision)) {
		return;
	}
	
	var result = value * Math.pow(10, precision);
	result = Math.round(result);
	result = result / Math.pow(10, precision);
	
	return result;
}