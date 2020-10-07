module.exports = function toReadable(number) {
    mas = number.toString().split("");

    if (mas.length === 1) {
        /*единицы*/
        switch (number) {
            case 0:
                return "zero";
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
        }
    }

    if (mas.length === 2) {
        if (mas[mas.length - 2] === "1") {
            switch (number) {
                case 10:
                    return "ten";
                case 11:
                    return "eleven";
                case 12:
                    return "twelve";
                case 13:
                    return "thirteen";
                case 14:
                    return "fourteen";
                case 15:
                    return "fifteen";
                case 16:
                    return "sixteen";
                case 17:
                    return "seventeen";
                case 18:
                    return "eighteen";
                case 19:
                    return "nineteen";
            }
        } else {
            switch (mas[mas.length - 2]) {
                case "2":
                    res = "twenty" + " ";
                    break;
                case "3":
                    res = "thirty" + " ";
                    break;
                case "4":
                    res = "forty" + " ";
                    break;
                case "5":
                    res = "fifty" + " ";
                    break;
                case "6":
                    res = "sixty" + " ";
                    break;
                case "7":
                    res = "seventy" + " ";
                    break;
                case "8":
                    res = "eighty" + " ";
                    break;
                case "9":
                    res = "ninety" + " ";
                    break;
            }
            if (mas[mas.length - 1] === "0") {
                return res.slice(0, -1);
            } else {
                switch (mas[mas.length - 1]) {
                    case "1":
                        return res + "one";
                    case "2":
                        return res + "two";
                    case "3":
                        return res + "three";
                    case "4":
                        return res + "four";
                    case "5":
                        return res + "five";
                    case "6":
                        return res + "six";
                    case "7":
                        return res + "seven";
                    case "8":
                        return res + "eight";
                    case "9":
                        return res + "nine";
                }
            }
        }
    }

    if (mas.length === 3) {
        switch (mas[mas.length - 3]) {
            case "1":
                res = "one hundred" + " ";
                break;
            case "2":
                res = "two hundred" + " ";
                break;
            case "3":
                res = "three hundred" + " ";
                break;

            case "4":
                res = "four hundred" + " ";
                break;

            case "5":
                res = "five hundred" + " ";
                break;

            case "6":
                res = "six hundred" + " ";
                break;

            case "7":
                res = "seven hundred" + " ";
                break;

            case "8":
                res = "eight hundred" + " ";
                break;

            case "9":
                res = "nine hundred" + " ";
                break;
        }
        if (mas[mas.length - 2] === "0") {
            if (mas[mas.length - 1] === "0") {
                return res.slice(0,-1);
            } else {
                switch (mas[mas.length - 1]) {
                    case "1":
                        return res + "one";
                    case "2":
                        return res + "two";
                    case "3":
                        return res + "three";
                    case "4":
                        return res + "four";
                    case "5":
                        return res + "five";
                    case "6":
                        return res + "six";
                    case "7":
                        return res + "seven";
                    case "8":
                        return res + "eight";
                    case "9":
                        return res + "nine";
                }
            }
        } else if (mas[mas.length - 2] === "1") {
            switch (mas[mas.length - 2] + mas[mas.length - 1]) {
                case "10":
                    res += "ten";
                    return res;
                case "11":
                    res += "eleven";
                    return res;
                case "12":
                    res += "twelve";
                    return res;
                case "13":
                    res += "thirteen";
                    return res;
                case "14":
                    res += "fourteen";
                    return res;
                case "15":
                    res += "fifteen";
                    return res;
                case "16":
                    res += "sixteen";
                    return res;
                case "17":
                    res += "seventeen";
                    return res;
                case "18":
                    res += "eighteen";
                    return res;
                case "19":
                    res += "nineteen";
                    return res;
            }
        } else {
            switch (mas[mas.length - 2]) {
                case "2":
                    res += "twenty ";
                    break;
                case "3":
                    res += "thirty ";
                    break;
                case "4":
                    res += "forty ";
                    break;
                case "5":
                    res += "fifty ";
                    break;
                case "6":
                    res += "sixty ";
                    break;
                case "7":
                    res += "seventy ";
                    break;
                case "8":
                    res += "eighty ";
                    break;
                case "9":
                    res += "ninety ";
                    break;
            }
            if (mas[mas.length - 1] === "0") {
                return res.slice(0, -1);
            } else {
                switch (mas[mas.length - 1]) {
                    case "1":
                        return res + "one";
                    case "2":
                        return res + "two";
                    case "3":
                        return res + "three";
                    case "4":
                        return res + "four";
                    case "5":
                        return res + "five";
                    case "6":
                        return res + "six";
                    case "7":
                        return res + "seven";
                    case "8":
                        return res + "eight";
                    case "9":
                        return res + "nine";
                }
            }
        }
    }
};
