import React from 'react'
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const Analytics = () => {
    const options ={
        plugins : {
            legend:{
                position: 'left'
            },
            title: {
                display: true,
                text:"Expense Tracker"
            }
        }
    }
    const labels = ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' ,'Nov' , 'Dec']
    const data ={
        labels,
        datasets : [
            {
                label : '2020 Expenses' ,
                data:[1000, 3500, 1200, 8100, 2500, 1208, 1700, 3000, 2500, 6100, 4000, 5600 ],
                backgroundColor:'pink'
            },
            {
                label : '2021 Expenses' ,
                data:[500, 8500, 2000, 8000, 1000, 8908, 7000, 1500, 6000, 1800, 4000, 1500],
                backgroundColor:'gray'
            }
        ]
    };
    return (
       
       
        <div>
        <Bar
         
          data={data}
          options={options}
          height="200px"
          width="800px"
          />
          </div>
      
    );
};

export default Analytics;