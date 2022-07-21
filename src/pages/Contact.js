import {React,useState} from 'react'

const Contact = () => {
    const [data, setData] = useState({
        Name: "",
        Email: "",
        Subject: "",
        Message: "",
    });
    
    const inputData = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);
        setData({...data, [name]:value });
    }
    
    const submitform = async(e) =>{
        e.preventDefault();
        const {Name , Email , Subject, Message} = data;
        if(Name && Email && Subject && Message){
            const res = fetch("https://sovaso-default-rtdb.firebaseio.com/sovaso.json",
            {
            method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Name,
                    Email,
                    Subject,
                    Message,
                }),
            }
            );
    
            if (res) {
                setData({
                    Name: "",
                    Email: "",
                    Subject: "",
                    Message: "",
                });
                alert("Data Stored");
            }else{
                alert("Please Fill Data");
            }
        }else{
            alert("Please Fill Data");
        }
    };
  return (
    <>
      <section className="section bg-light " id="contact">
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="section-title">
                            <h3 className="heading text-bold">Contact us</h3>
                            <p className="text-muted mb-0">Various versions have evolved over the years, sometimes by
                                excepteur sint occaecat cupidatat non proident.</p>
                        </div>

                        <div className="form p-4 rounded bg-white">
                            <form method="post" id="myForm" name="myForm">
                                <p className="mb-0" id="error-msg"></p>
                                <div id="simple-msg"></div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <input name="Name" id="Name" value={data.Name} onChange={inputData} type="text" className="form-control"
                                                placeholder="Name :"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <input name="Email" id="Email2" value={data.Email} onChange={inputData} type="email" className="form-control"
                                                placeholder="Email :"/>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-4">
                                            <input name="Subject" id="Subject" value={data.Subject} onChange={inputData} className="form-control"
                                                placeholder="Subject :"/>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-4">
                                            <textarea name="Message" id="Message" value={data.Message} onChange={inputData} rows="4" className="form-control"
                                                placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <button 
                                            type="submit" 
                                            className="btn btn-outline-success rounded-pill" 
                                            onClick={submitform}> 
                                            Submit 
                                        </button>
                    
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77499.72658982754!2d-79.40171002253008!3d43.79152093468001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1655895093676!5m2!1sen!2sin" title="anc"  height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact;



