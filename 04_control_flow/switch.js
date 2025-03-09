// switch sytex
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
//-------------------------------------------------------------

const month=3

switch (month) {
    case 1:
        console.log(`Jan`);        
        break;
    case 2:
        console.log(`Feb`);        
        break;
    case 3:
        console.log(`March`);        
        break;// break plays important role, if we miss adding this break all the cases after this case will be printed
    case 4:
        console.log(`April`);        
        break;

    default:
        console.log(`Default case`);
        break;
}

const monthName='April'
switch (monthName) {
    case 'January':
        console.log('Jan');        
        break;
    case 'February':
        console.log('Feb');        
        break;
    case 'March':
        console.log('March');        
        break;
    case 'April':
        console.log('Apr');        
        break;

    default:
        console.log(`default value`);        
        break;
}