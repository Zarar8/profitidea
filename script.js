document.addEventListener("DOMContentLoaded", function () {
    const inputArea = document.getElementById("salesInput");
    const calculateBtn = document.getElementById("calculate");
    const resultArea = document.getElementById("result");
    
    calculateBtn.addEventListener("click", function () {
        let salesData = inputArea.value.trim().split("\n");
        let sales = {};
        let totalSales = 0;
        let bestNumber = null;
        let maxProfit = -Infinity;
        
        // Store sales in an object
        for (let i = 0; i < salesData.length; i++) {
            let [number, count] = salesData[i].split(":").map(s => s.trim());
            number = parseInt(number);
            count = parseInt(count);
            
            if (!isNaN(number) && !isNaN(count) && number >= 0 && number <= 99) {
                sales[number] = count;
                totalSales += count;
            }
        }
        
        let totalRevenue = totalSales * 10;
        let remainingBalance = totalRevenue;
        
        // Calculate profit for each number
        for (let num in sales) {
            let ticketSold = sales[num];
            let payout = ticketSold * 10000;
            let profit = totalRevenue - payout;
            
            if (profit > maxProfit) {
                maxProfit = profit;
                bestNumber = num;
                remainingBalance = profit;
            }
        }
        
        // Display result
        if (bestNumber !== null) {
            resultArea.innerHTML = `Sabse behtareen number jo profit de sakta hai: <b>${bestNumber}</b><br>
                                   Expected profit: <b>${maxProfit} Rupees</b><br>
                                   Inaam dene ke baad bacha hua paisa: <b>${remainingBalance} Rupees</b>`;
        } else {
            resultArea.innerHTML = "Ghalat input ya koi valid sales nahi mili.";
        }
    });
});