const data=[{
    ReceivedFrom : "RICHLAND LOGISTICS SVCS PTE LTD",
    AWBNumber: "816-11001015",

CUSTOMERDETAILS:" 1A1 GOODBOYS TEAM-ACT-CNE-SHP <br>BEACH GRAND AND SPA<br> HULHUMALE,MLE,MV.12011",
TIN: "98765ABCD12",

CollectionTime : "17AUG2016",

SHC:"PER",

CHARGEABLEWT:"1000.0K",

RCVDWTTOTWT:"1000.0K/1000.OK",

NATUREOFGOODS:"PERISHABLE",

Terminal :"T6",

ReceiptNumber : "A1000020",

ReceiptDate:" 23NOV2017 1040HRS",

CURRENCY:"MVR",

BILLINGPARTYCODE:"GOD",

PAYMENTMETHOD:"CASH",

ISSUEDBY : "AMIR",

MAWB :"618-33800001",

FLTDATE:"SQ0338A/23NOV17",

ACTPCSTOTPCS:" 100/100",
ChargeItems:[
    {
        title:"RCAR SCREENING FEE",
        Quantity:"1000.0",
        Duration:" ",
        Amount:"900.00"
    },
    {
        title:"FWB CREATION SERVICE FEE",
        Quantity:"1.0",
        Duration:" ",
        Amount:"18.00"
    },
    {
        title:"DANGEROUS GOODS HANDLING FEE",
        Quantity:"1.0",
        Duration:" ",
        Amount:"100.00"
    },
    {
        title:"FORK LIFT CHARGES",
        Quantity:"1.0",
        Duration:"3",
        Amount:"360.00"
    },
    {
        title:"TOTAL",
        Quantity:" ",
        Duration:" ",
        Amount:"1378.00"
    },
    


],
WaiveDetail:[
    {
        title:"FORK LIFT CHARGES",
        Quantity:" ",
        Duration:"1",
        Amount:"120.00"
    },
    {
        title:"TOTAL",
        Quantity:" ",
        Duration:" ",
        Amount:"120.00"
    },


],
Total:[
    {
        total:"3105.00",
        GST:"186.30",
        GRANDTOTAL:"3291.00"

    }
]
}
]
const tabelContentTemlate = (el) => `
<header><h2>Cargo Official Receipt</h2> <img src="Ata.jpg" alt="KMA.jpg" width="10%" style="margin-left: 80%;"></header>
   <div style="display:flex; justify-content:space-between">     
<div style="margin-left:10px">
    <p><h4><b>Received From</b></h4>${el.ReceivedFrom}</p>
    <p><h4><b>AWB Number</b></h4> ${el.AWBNumber}</p>
   
    <P><h4><b>CUSTOMER DETAILS</b></h4>${el.CUSTOMERDETAILS}</p>
<p><h4><b>TIN</b></h4>${el.TIN}
</P>
<p><h4><b>Collection Time </b></h4>${el.CollectionTime}</p>
    <P><h4><b>SHC</b></h4>${el.SHC}</P>
    <P><h4><b>CHARGEABLE WT</b></h4>${el.CHARGEABLEWT}</P>
    <P><h4><b>RCVD WT/TOT WT</b></h4>${el.RCVDWTTOTWT}</P>
    <P><h4><b>NATURE OF GOODS</b></h4>${el.NATUREOFGOODS}</P>
    <p><h4><b>Terminal </b></h4>${el.Terminal}</p>
    <p><h4><b>Receipt Number </b></h4> ${el.ReceiptNumber} </p>
    <p><h4><b>Receipt Date</b></h4> ${el.ReceiptDate}</p>
    <P><h4><b>CURRENCY</b></h4>${el.CURRENCY}</P>
    <P><h4><b>BILLING PARTY CODE</b></h4>${el.BILLINGPARTYCODE} </P>
    <P><h4><b>PAYMENT METHOD</b></h4>${el.PAYMENTMETHOD}</P>
    <P><h4><b>ISSUED BY </b></h4> ${el.ISSUEDBY}</P>
    <P><h4><b>MAWB </b></h4>${el.MAWB}</P>
    <P><h4><b>FLT/DATE</b></h4>${el.FLTDATE}</P>
    <p><h4><b>ACT PCS/TOT PCS</b></h4> ${el.ACTPCSTOTPCS}</p>
    
</div>
</div>
<div >
<p><header>Charge Detail</header></p>
<table>
    <tr class="ch">
        <th class="ch">Charge Items</th>
        <th class="a">Quantity</th>
        <th class="a">Duration</th>
        <th class="a">Amount</th>
    </tr>

    ${
        el.ChargeItems.map(el => 
            `
            <tr>
        <td>${el.title}</td>
        <td>${el.Quantity}</td>
        <td>${el.Duration}</td>
        <td>${el.Amount}</td>
    </tr>
    `)
    }
</table>
</div>
<div>
<p><header>Waive Detail</header></p>
<table>
    <tr >
        <th class="ch1">Service Type</th>
        <th class="a">Quantity</th>
        <th class="a">Duration</th>
        <th class="a">Amount</th>
    </tr>
    <tr>
    ${
        el.WaiveDetail.map(el => 
            `
            <tr>
        <td>${el.title}</td>
        <td>${el.Quantity}</td>
        <td>${el.Duration}</td>
        <td>${el.Amount}</td>
    </tr>
    `)
    }
</table>
</div>
<div>
<p><header>Total</header></p>
<table>
<tr >
        <th class="TOTAL">Total</th>
        <th class="a">GST(6%)</th>
        <th class="a">GRANDTOTAL</th>
       
    </tr>
<tr>
    ${
        el.Total.map(el => 
            `
            <tr>
        <td>${el.total}</td>
        <td>${el.GST}</td>
        <td>${el.GRANDTOTAL}</td>
       
    </tr>
    `)
    }
    
</table>
</div>



`

console.log(tabelContentTemlate(data[0]));

document.getElementById("tablef").innerHTML=tabelContentTemlate(data[0]);

