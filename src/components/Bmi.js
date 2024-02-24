import React, {useState} from 'react';
// import { useAuth0, user } from '@auth0/auth0-react';
import '../bmi.css';
import { FormGroup, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system'; 
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';



const Bmi = () => {

    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] = useState('')
    const [message, setMessage] = useState('')
    const [message2,setMessage2] = useState('')
    // const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    

    let calcBmi = (event) => {
        event.preventDefault()

        if (weight === '' || height === '') {
            alert("Please enter a valid height and weight")
        } else {
            let heightm = height/100;
            let bmi = (weight / (heightm * heightm))
            setBmi(bmi.toFixed(1))

            //message

            if(bmi < 18.5) {
                setMessage("You are underweight")
            } else if(bmi >=18.5 && bmi <25) {
                setMessage("You have a healthy weight")
            } else if(bmi>=25) {
                setMessage("You are overweight")
            } else {
                setMessage("NO BMI CALCULATED")
            }


            if(bmi < 18.5) {
                setMessage2(
                    <div class="scrollable-div">
                    <p id="a1">
                    <Typography color="#FF2625" fontWeight="600" fontSize="26px" align='left'>CONS OF BEING UNDERWEIGHT</Typography><br/><br/>
                    Being underweight has its own associated risks, listed below:<br/><br/>

<ul><li>Malnutrition, vitamin deficiencies, anemia (lowered ability to carry blood vessels)</li>
<li>Osteoporosis, a disease that causes bone weakness, increasing the risk of breaking a bone</li>
<li>A decrease in immune function</li>
<li>Growth and development issues, particularly in children and teenagers</li>
<li>Possible reproductive issues for women due to hormonal imbalances that can disrupt the menstrual cycle. Underweight women also have a higher chance of miscarriage in the first trimester</li>
<li>Potential complications as a result of surgery</li>
<li>Generally, an increased risk of mortality compared to those with a healthy BMI</li></ul>
In some cases, being underweight can be a sign of some underlying condition or disease such as anorexia nervosa, which has its own risks. Consult your doctor if you think you or someone you know is underweight, particularly if the reason for being underweight does not seem obvious.
</p>
<p id='a1'><Typography color="#FF2625" fontWeight="600" fontSize="26px" align='left'>ADVICE FOR IMPROVING YOUR HEALTH</Typography><br/><br/>
                    If your BMI is below 18.5, there are some steps you can take to improve your health:<br/><br/>
                    For individuals who are underweight, improving health involves a balanced approach focusing on nutrition, exercise, and overall well-being:<br/><br/>

<ol>
<li><b>Nutrition</b>: Consume nutrient-dense foods that are rich in healthy fats, proteins, complex carbohydrates, vitamins, and minerals. Include sources of lean protein (chicken, fish, tofu), healthy fats (avocado, nuts, olive oil), and complex carbohydrates (whole grains, fruits, vegetables).</li>

<li><b>Frequent Meals</b>: Eat smaller, frequent meals throughout the day to increase calorie intake. Snack on healthy options like nuts, seeds, yogurt, or fruit between meals.</li>

<li><b>Strength Training</b>: Incorporate resistance exercises to build muscle mass. This can include weightlifting, bodyweight exercises, or using resistance bands. Working with a trainer to create a safe and effective routine is beneficial.</li>

<li><b>Balanced Exercise</b>: Engage in moderate-intensity aerobic exercises like walking, jogging, or cycling to improve overall fitness and appetite. Exercise stimulates appetite and helps in building a healthy appetite.</li>

<li><b>Healthy Snacking</b>: Opt for nutrient-dense snacks like smoothies, trail mix, or peanut butter on whole-grain toast to boost calorie intake between meals.</li>

<li><b>Avoid Empty Calories</b>: Avoid sugary snacks and drinks as they provide empty calories without substantial nutritional benefits.</li>

<li><b>Medical Check-up</b>: Rule out any underlying medical conditions contributing to being underweight by consulting a healthcare professional.</li>

<li><b>Adequate Rest</b>: Ensure you're getting sufficient sleep and managing stress levels. Both are crucial for overall health and can impact appetite and weight.</li>

<li><b>Track Progress</b>: Keep a food diary or use apps to monitor your food intake, ensuring you're meeting your calorie and nutrient needs.</li></ol><br/><br/>

Remember, healthy weight gain should be gradual and achieved through a balanced approach. Consulting a healthcare provider or a nutritionist is recommended to create a tailored plan that suits your specific needs and health conditions.</p></div>


                    













                )
            } 
            
            
            
            else if(bmi >=18.5 && bmi<25) {
                setMessage2(
                    <div class="scrollable-div">
                    <p id="a1">
                        
                        
                        <Typography color="#FF2625" fontWeight="600" fontSize="26px" align='left'>Congrats, you have a healthy BMI</Typography><br/><br/>
                        <Typography color="BLACK" fontWeight="600" fontSize="26px" align='left'>Here's how you can maintain your current BMI</Typography><br/><br/>
                        
                        
                        Maintaining a normal BMI involves a combination of healthy eating habits, regular physical activity, and lifestyle adjustments. Here are some tips:

                        <ol>
                        <li><b>Balanced Diet</b>: Focus on a well-rounded diet that includes plenty of fruits, vegetables, lean proteins, whole grains, and healthy fats. Portion control is key—be mindful of serving sizes.</li>
                        
                        <li><b>Regular Exercise</b>: Incorporate regular physical activity into your routine. Aim for at least 150 minutes of moderate-intensity exercise per week, which can include activities like brisk walking, cycling, swimming, or any activity you enjoy.</li>
                        
                        <li><b>Stay Hydrated</b>: Drink plenty of water throughout the day. Sometimes thirst can be mistaken for hunger, leading to unnecessary snacking.</li>
                        
                        <li><b>Mindful Eating</b>: Pay attention to hunger cues and avoid emotional eating. Eat slowly, savoring each bite, and stop when you feel comfortably full.</li>
                        
                        <li><b>Limit Processed Foods and Sugars</b>: Minimize intake of processed foods, sugary snacks, and drinks. These often contribute excess calories without providing necessary nutrients.</li>
                        
                        <li><b>Monitor Your Weight Regularly</b>: Keep an eye on your weight to catch any significant changes early. This allows for adjustments in your diet or exercise routine if needed.</li>
                        
                        <li><b>Manage Stress</b>: Stress can affect eating habits. Practice stress-reduction techniques like meditation, yoga, or deep breathing exercises.</li>
                        
                        <li><b>Get Enough Sleep</b>: Aim for 7-9 hours of quality sleep each night. Poor sleep can affect hormones that regulate appetite, leading to potential weight changes.</li>
                        
                        <li><b>Seek Professional Guidance</b>: Consult with a registered dietitian or nutritionist to create a personalized meal plan that suits your lifestyle and dietary needs.</li>
                        
                        <li><b>Maintain Consistency</b>: Healthy habits are about consistency rather than perfection. Small, sustainable changes over time can lead to long-term success.</li></ol>
                        
                        Remember, a healthy BMI is just one indicator of overall health. It’s essential to focus on overall well-being, including mental and emotional health, rather than solely on the number on the scale. </p> </div>














                )
            } 
            
            
            
            else if(bmi>=25) {
                setMessage2(
                    <div class="scrollable-div">
                    <p id="a1">
                        
                        
                        <Typography color="#FF2625" fontWeight="600" fontSize="26px" align='left'>CONS OF BEING OVERWEIGHT</Typography><br/><br/>
                        
                        Being overweight increases the risk of a number of serious diseases and health conditions. Below is a list of said risks, according to the Centers for Disease Control and Prevention (CDC):<br/><br/>
                    <ul>
                    <li>High blood pressure</li>
                    <li>Higher levels of LDL cholesterol, which is widely considered "bad cholesterol," lower levels of HDL cholesterol, considered to be good cholesterol in moderation, and high levels of triglycerides</li>
                    <li>Type II diabetes</li>
                    <li>Coronary heart disease</li>
                    <li>Stroke</li>
                    <li>Gallbladder disease</li>
                    <li>Osteoarthritis, a type of joint disease caused by breakdown of joint cartilage</li>
                    <li>Sleep apnea and breathing problems</li>
                    <li>Certain cancers (endometrial, breast, colon, kidney, gallbladder, liver)</li>
                    <li>Low quality of life</li>
                    <li>Mental illnesses such as clinical depression, anxiety, and others</li>
                    <li>Body pains and difficulty with certain physical functions</li>
                    <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li><br/><br/>
                    As can be seen from the list above, there are numerous negative, in some cases fatal, outcomes that may result from being overweight. Generally, a person should try to maintain a BMI below 25 kg/m2, but ideally should consult their doctor to determine whether or not they need to make any changes to their lifestyle in order to be healthier.
                    </ul></p>
                    <p id='a1'><Typography color="#FF2625" fontWeight="600" fontSize="26px" align='left'>ADVICE FOR IMPROVING YOUR HEALTH</Typography><br/><br/>
                    If your BMI is above 25, there are some steps you can take to improve your health:<br/><br/>
<ol>

<li><b>Healthy Eating</b>: Focus on a balanced diet with plenty of fruits, vegetables, lean proteins, and whole grains. Watch portion sizes and be mindful of calorie intake.</li>

<li><b>Regular Exercise</b>: Incorporate regular physical activity into your routine. Aim for at least 150 minutes of moderate-intensity exercise per week, or as advised by your healthcare provider.</li>

<li><b>Consult a Professional</b>: Consider consulting a nutritionist or dietitian to create a personalized meal plan. Similarly, a personal trainer or fitness expert can assist in crafting an exercise regimen suitable for your fitness level and goals.</li>

<li><b>Lifestyle Changes</b>: Make small but impactful changes to your daily routine, such as taking the stairs instead of the elevator, walking short distances, or engaging in activities you enjoy that involve movement.</li>

<li><b>Mindful Eating</b>: Pay attention to your eating habits. Avoid emotional eating or eating when not hungry. Mindful eating involves being present and fully engaged in the act of eating, paying attention to hunger and satiety cues.</li>

<li><b>Regular Health Check-ups</b>: Schedule regular visits with your healthcare provider to monitor your progress and address any health concerns or underlying conditions. </li>

<li><b>Be Patient and Persistent</b>: Healthy weight management takes time and consistency. Don’t get discouraged by setbacks. Focus on long-term lifestyle changes rather than quick fixes.</li>

<li>Remember, it's essential to approach any changes in your lifestyle or diet in a balanced and sustainable manner. Consulting with a healthcare professional can provide personalized guidance based on your specific needs and health status.</li></ol></p>
                    
                    
                    
                    
                    
                    
                    
                    
                    </div>
                    
                    
                    
                    )
                
               
            } 
            
            
            else {
                setMessage2("NO BMI CALCULATED")
            }
        }


    }

    let imgSrc = ''
    if(bmi<1) {
        imgSrc = null
    } else if(bmi<18.5) {
        imgSrc = require('../assets/images/underweight.png')
    } else if(bmi>=18.5 && bmi<24.9)
    {
        imgSrc= require('../assets/images/healthy.png')
    } else if(bmi>=25) {
        imgSrc= require('../assets/images/overweight.png')
    } else {
        imgSrc= null;
    }

    let reload = () => {
        window.location.reload()
    }


  return (
    <>
    <div className='main-container'>
    <div className='container'>
    <Typography color="#FF2625" fontWeight="600" fontSize="26px" align='center'>Calculate your BMI<br/> (BODY MASS INDEX)</Typography><br/>
        {/* <form onSubmit={calcBmi}> */}
        <form onSubmit={calcBmi}>
            <div>
                <label>Weight (Kgs)</label>
                <input value={weight} onChange={(event) => setWeight(event.target.value)}/>
            </div>
            <div>
                <label>Height (Cms)</label>
                <input value={height} onChange={(event) => setHeight(event.target.value)}/>
            </div>
            <div>
                <button className='btn' type='submit'>Submit</button>
                <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>


            </div>
        </form>
        <div className='center'>
            Dear user, <br/> Your BMI is<br/><h1>{bmi}</h1>
            <p>{message}</p>

        </div>

        <div className='img-container'>
            <img src={imgSrc} alt=''></img>
        </div>
        
        
        </div><br/>

<div className='container2'> <Typography color="#FF2625" fontWeight="600" fontSize="26px" align='center'>SUGGESTIONS & RECOMMENDATIONS</Typography><br/>
<p id="a1"><Typography color="#FF2625" fontWeight="600" fontSize="16px" align='left'>To know about thousands of exercises, go to our homepage and start exploring!</Typography><br/><br/>
<Link to="/">
        
        <Button className="Search-btn"
        variant="contained"
             sx={{
                bgcolor:'#0066FF', 
                color:'#fff',
                textTransform:'none',
                width: {lg:'280px',xs:'80px'},
                fontSize:{lg:'20px',xs:'14px'},
                height:'40px',
                margin:'3px',
                
                right:'0'
                }}
                // onClick={() => navigateToHome()}
            
            >EXPLORE EXERCISES</Button></Link></p>
<p>{message2}</p>
   </div>
   </div>

   </>


   
  )
}

export default Bmi
