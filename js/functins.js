function main() {
	// because the world main make sense in any programming language
}

/**
 * validate given email address
 * @var email: the given email address
 * @return true if valid
 * @return false if invalid
 */
function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

/**
 * check if the given number is an integer or not
 * @var number: the vlaue you want to check if integer or not
 * @return true if number is an integer
 * @return false if number is anything but integer
 */
function isInt(number) {
	if(typeof number === 'number') {
		var remainder = (number % 1);
		if(remainder === 0) {
			// console.log("yes, it is an integer");
			return true;
		}
		else if(isNaN(remainder)) {
			// console.log("no, number is either: NaN, Infinity, or -Infinity");
			return false;
		}
		else {
			// console.log("no, it is a float (still a number though)");
			return false;
		}
	} else {
		// console.log("no way, it is not even a number");
		return false;
	}
}

/**
 * generate a random integer between min (inclusive) and max (inclusive)
 * @var min: the smallest number to get
 * @var max: the biggest number to get
 * @return random number between the min and max
 * @return false if min or max or both are anything but integers
 */
function getRandomInt(min, max) {
	if (isInt(min) && isInt(max)) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	} else {
		// console.log("min or max or both is or are not integers");
		return false;
	}
}

/**
 * get the current page the user is in right now
 * @return the current page name with the file extention (ex: index.html) or if it's the default page (ex: www.thecvcreator.com) return index
 * @return false if the return value was anything but sting mening an error happend
 */ 
function getCurrentPage() {
	var page = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
	if (typeof(page) === "string") {
		if (page.length > 0) {
			return page;
		} else if (page.length === 0) {
			return "index";	
		}
	} else {
		return false;
	}
}

/**
 * so we can check if the browser is IE or not and handel events based on that
 * in order to call this function
 * addEventListener(element, event, handel);
 */
var addEventListener = (function() {
    if(document.addEventListener) {
        return function(element, event, handler) {
            element.addEventListener(event, handler, false);
        };
    }
    else {
        return function(element, event, handler) {
            element.attachEvent('on' + event, handler);
        };
    }
}());

/**
 * so we can replaceAll not just the first ocurance of the item
 * NOTE: this method add to the core javascript methods of any string
 * in other word you can use it on any string varaible
 * ex:
 * var x = "hello there I'm a test test test";
 * x.replaceAll("test", "legend");
 * x now equals: hello there I'm a legend legend legend
 */
String.prototype.replaceAll = function(search, replacement) {
	var target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
};

/**
 * check a string if it is a hex color or not
 */
function isHexColor(color) {
	return color.match(/#((\w{6})|(\w{3}))/);
}

/**
 * check a string if it is a RGB color or not
 */
function isRGBColor(color) {
	return color.match(/rgb\s?\(\s?\d+\s?,\s?\d+\s?,\s?\d+\s?\)/)
}

/**
 * convert hex color to RGB color
 */
function hexToRGB(originalColor) {
	var vals = originalColor.match(/\w+/)[0];
	var retVal = {};
	if (vals.length === 3) {
		vals = vals[0] + vals[0] + vals[1] + vals[1] + vals[2] + vals[2];
	}
	retVal.red = hexToDec(vals.substr(0, 2));
	retVal.green = hexToDec(vals.substr(2, 2));
	retVal.blue = hexToDec(vals.substr(4, 2));
	return retVal;
}

/**
 * convert hex to decimal value
 */
function hexToDec(hexNum) {
	return parseInt(hexNum, 16);
}

/**
 * convert decimal to hex value
 */
function decToHex(decNum) {
	return decNum.toString(16);
}

/**
 * if color value is less then 0 set it to 0
 * if color value is bigger than 255 set it to 255
 * other then than that keep it as it is
 */
function clamp(val) {
	if (val < 0) {
		return 0;
	}
	if (val > 255) {
		return 255;
	}
	return val;
}

/**
 * check if the device is a touch device or not
 */
function is_touch_device() {
	return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}
