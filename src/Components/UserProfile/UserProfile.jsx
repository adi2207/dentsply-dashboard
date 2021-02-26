import './Main.css';
import Chart from '../Charts/Charts';
import hello from "../../Assets/avatar.jpg"

const Main = () => {
    return(
       <main>
           <div className="main__container">
               <div className="main__title">
                   <div className="main__greeting">
                  <img src={hello} alt="hello"/>
                   <h1>hello Dentsply</h1>
                   <p>Welcome to your profile</p>
               </div>
           </div>
           <div className="main__cards">
               <div className="card">
                   <i className="fa fa-user-o fa-2x text-lightblue"></i>
                   <div className="card_inner">
                       <p className="text-primary-p">Number of suppliers</p>
                       <span className="font-bold text-title">578</span>
                   </div>
               </div>
               <div className="card">
                   <i className="fa fa-calendar fa-2x text-red"></i>
                   <div className="card_inner">
                       <p className="text-primary-p">Number of Orders</p>
                       <span className="font-bold text-title">2467</span>
                   </div>
               </div>
               <div className="card">
                   <i className="fa fa-usd fa-2x text-yellow"></i>
                   <div className="card_inner">
                       <p className="text-primary-p">Capped revenue</p>
                       <span className="font-bold text-title">9,958,000</span>
                   </div>
               </div>

               <div className="card">
                   <i className="fa fa-line-chart fa-2x text-green"></i>
                   <div className="card_inner">
                       <p className="text-primary-p">Total growth</p>
                       <span className="font-bold text-title">15%</span>
                   </div>
               </div>
             </div>

            <div className="charts">
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
            </div>

           </div>
           
       </main>
    )
}
export default Main;