$(document).ready(function(){
  $(".div1").hover(function(){
  	  $('.div1').fadeOut('fast', function(){
        $('.div2').fadeIn('slow');
    });
    $(".div3").delay(1000).fadeIn();
  });

  $('#city').change(function(){
    $('.colors').hide();
    $('#' + $(this).val()).show();
    $('.top').hide();
    $('.content_section').show();
    $('.output').show();

  });
  $('.button').click(function(){
    $('.chart').show();

});
    $('.button2').click(function(){
    $('.chart2').show();
  });
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: "radar",
    data: {
    labels: ["Cost of Living(excl.Rent)", "Rent Index", "Grociery Index", "Restaurant Index", "Cost of living with rent", "Local Purchasing Power"],
    datasets: [
        {
            label: "London",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [83, 72, 63, 91, 78, 83]
        },
        {
            label: "Berlin",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [64, 26, 50, 55, 49, 114]
        }
    ]
},
    options: {
            scale: {
                reverse: false,
                ticks: {
                    beginAtZero: true
                }
            }
    }
});

var ctx = document.getElementById("mybarChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {  
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        } 
    }
});  
});



