const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const results = [
  {mood: 'Apple', total: 700, color: '#FA4646'},
  {mood: 'Banana', total: 360, color: '#FAFA40'},
  {mood: 'Pear', total: 200, color: '#20FA5E'},
  {mood: 'Orange', total: 400, color: '#FA9715'},
];

let sum = 0;

drawPieChart();

function drawPieChart() {
  let totalNumberOfPeople = results.reduce((sum, { total }) => sum + total, 0);
  
  let currentAngle = 0;
  
  for (let fruitValue of results) {
    let portionAngle = (fruitValue.total / totalNumberOfPeople) * 2 * Math.PI;
  
    ctx.beginPath();
    ctx.arc(100, 100, 100, currentAngle, currentAngle + portionAngle);

    currentAngle += portionAngle;

    ctx.lineTo(100, 100);
    ctx.fillStyle = fruitValue.color;
    ctx.fill();
  }
}
