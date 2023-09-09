let clk=document.getElementById("btn");
clk.addEventListener("click",(event)=>{
    let sub1= document.getElementById("s1");
    let sub2= document.getElementById("s2");
    let sub3= document.getElementById("s3");
    let sub4= document.getElementById("s4");
    let sub5= document.getElementById("s5");
    let sub6= document.getElementById("s6");
    let sub7= document.getElementById("s7");
    let sub8= document.getElementById("s8");
    let sub9= document.getElementById("s9");
    let output1=sub1.value;
    let output2=sub2.value;
    let output3=sub3.value;
    let output4=sub4.value;
    let output5=sub5.value;
    let output6=sub6.value;
    let output7=sub7.value;
    let output8=sub8.value;
    let output9=sub9.value;
    let subject1=3*output1;
    let subject2=3*output2;
    let subject3=1.5*output3;
    let subject4=1.5*output4;
    let subject5=4*output5;
    let subject6=3*output6;
    let subject7=2*output7;
    let subject8=4*output8;
    let subject9=2*output9;
    let resultAns=(subject1+subject2+subject3+subject4+subject5+subject6+subject7+subject8+subject9)/24;
    let lastAns=resultAns.toFixed(3);
    let prt=document.querySelector(".result h5");
    prt.textContent=lastAns;
    event.preventDefault();
}
)
