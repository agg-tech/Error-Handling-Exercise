function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}





//MY CODE
function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}

const numberOfOperations = 20;

const daysIfSuccess = 13;
const daysIfFailure = 1;
const daysForAttendance = 3;

let totalDays = 0;

for (let i = 0; i < numberOfOperations; i++) {
    try {
        mysteryOperation();
        totalDays += daysIfSuccess;
    }
    catch {
        totalDays += daysIfFailure;
    }
    finally {
        totalDays += daysForAttendance;
    }
}
console.log(`At the end of your campaign, you've accumalted ${totalDays}. Congrats.`)
