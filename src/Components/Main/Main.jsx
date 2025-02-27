import './Main.css';
import Barchart from '../Charts/Barchart'
import Piechart from '../Charts/Piechart'
import Worldmap from '../Charts/Worldmap'
import Form from '../Form/Form'
import React, { useState } from 'react';

 const data = {
    numberofSuplliers: "578",
    numberOfOrders: "3916",
    totalSales: "10,290",
    cappedRevenue:"20,030",
    totalgrowth:15

}

const Main = () => {
    const [chartValue, setChartValue] = useState('')
    const [loading, setLoading]= useState(false);
    function handleChange(e) {
        setChartValue(e.target.value);
    }
    const [productValue, setProductValue] = useState('')
    const [formData, setFormData] = useState([]);

    function handleProductChange(e) {
        setChartValue(e.target.value);
    }

    const onPredict = (formDataReceived) => {    
        setLoading(true);
        setFormData(formDataReceived);
        setLoading(false);
      };

      if(loading){
          return null;
      }
      else{
    return(
       <main>
           <div className="main__container">
               <Form onPredict={onPredict}></Form>
               {/* <div className="main__title">
                   <div className="main__greeting">
                  <img src={hello} alt="hello"/>
                   <h1>hello Dentsply</h1>
                   <p>Welcome to your admin Dashboard</p>
               </div>
           </div> */}
           {/* <select onChange={handleChange} selected={chartValue}>
                <option value="">none</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
            </select>
            <select onChange={handleProductChange} selected={chartValue}>
                <option value="">none</option>
                <option value="p1">product 1</option>
                <option value="p2">product 2</option>
                <option value="p3">product 3</option>
            </select> */}
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
                       <p className="text-primary-p">Capped Revenue</p>
                        <span className="font-bold text-title">{data.cappedRevenue}</span>
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
            <div className="chart-spacing">
                <Barchart formData={formData} chartValue={chartValue}  productValue={productValue}/>
            </div>
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
}
export default Main;