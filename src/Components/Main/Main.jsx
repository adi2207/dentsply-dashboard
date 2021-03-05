import './Main.css';
import Barchart from '../Charts/Barchart'
import Piechart from '../Charts/Piechart'
import Worldmap from '../Charts/Worldmap'
import React, { useState } from 'react';

 const data = {
    numberofSuplliers: 578,
    numberOfOrders: 3916,
    totalSales: 102900,
    cappedRevemew:20030,
    totalgrowth:15

}

const Main = () => {
    const [chartValue, setChartValue] = useState('')
    function handleChange(e) {
        setChartValue(e.target.value);
       console.log(chartValue)
    }
    return(
       <main>
           <div className="main__container">
               
               {/* <div className="main__title">
                   <div className="main__greeting">
                  <img src={hello} alt="hello"/>
                   <h1>hello Dentsply</h1>
                   <p>Welcome to your admin Dashboard</p>
               </div>
           </div> */}
           <select onChange={handleChange} selected={chartValue}>
                <option value="">none</option>
                <option value="q1">quarter1</option>
                <option value="q2">quarter2</option>
                <option value="q3">quarter3</option>
                <option value="q4">quarter4</option>
            </select>
           <div className="main__cards">
               <div className="card">
                   <i className="fa fa-user-o fa-2x text-lightblue"></i>
                   <div className="card_inner">
                       <p className="text-primary-p">Number of suppliers</p>
                         <span className="font-bold text-title">{data.numberofSuplliers}</span>
                   </div>
               </div>
               <div className="card">
                   <i className="fa fa-calendar fa-2x text-red"></i>
                   <div className="card_inner">
                       <p className="text-primary-p">Number of Orders</p>
                        <span className="font-bold text-title">{data.numberOfOrders}</span>
                   </div>
               </div>
               <div className="card">
                   <i className="fa fa-shopping-cart fa-2x text-yellow"></i>
                   <div className="card_inner">
                       <p className="text-primary-p">Product Sales</p>
                        <span className="font-bold text-title">{data.totalSales}</span>
                   </div>
               </div>

               <div className="card">
                   <i className="fa fa-usd fa-2x text-green"></i>
                   <div className="card_inner">
                       <p className="text-primary-p">Capped Revenew</p>
                        <span className="font-bold text-title">{data.cappedRevemew}</span>
                   </div>
               </div>
             </div>

            {/* <div className="charts">
                <div className="charts__left">
                    <div className="charts__left__title">
                        <div>
                            <h1>Daily Reports</h1>
                            <p>Cupertino, California, USA</p>
                        </div>
                        <i className="fa fa-usd"></i>
                    </div>
                    <Chart />
                </div>
                <div className="charts__right">
                    <div className="charts__right__title">
                        <div>
                            <h1>Stats Reports of January</h1>
                            <p>Cupertino, California, USA</p>
                        </div>
                        <i className="fa fa-use"></i>
                    </div>
                    <div className="charts__right__cards">
                        <div className="card1">
                            <h1>Income</h1>
                            <p>$75,300</p>
                        </div>

                        <div className="card2">
                            <h1>Sales</h1>
                            <p>$124,200</p>
                        </div>

                        <div className="card3">
                            <h1>Users</h1>
                            <p>3900</p>
                        </div>

                        <div className="card4">
                            <h1>Orders</h1>
                            <p>1881</p>
                        </div>


                    </div>
                </div>
            </div> */}
            <div className="chart-spacing"><Barchart handleChange={handleChange} chartValue={chartValue}/></div>
            <div className="charts">
                <div className="charts__left">
                <Piechart/> 
                </div>
                <div className="charts__right">
                <Worldmap/>
                </div>
            </div>
           </div>
       </main>
    )
}
export default Main;