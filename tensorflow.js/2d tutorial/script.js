/**
 * Get the car data reduced to just the variables we are interested
 * and cleaned of missing data.
 */
async function getData() {
  const carsDataReq = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');  
  const carsData = await carsDataReq.json();  
  const cleaned = carsData.map(car => ({
    mpg: car.Miles_per_Gallon,
    horsepower: car.Horsepower,
  }))
  .filter(car => (car.mpg != null && car.horsepower != null));
  
  return cleaned;
}

async function run() {
  // Load and plot the original input data that we are going to train on.
  const data = await getData();
  const values = data.map(d => ({
    x: d.horsepower,
    y: d.mpg,
  }));

  tfvis.render.scatterplot(
    {name: 'Horsepower v MPG'},
    {values}, 
    {
      xLabel: 'Horsepower',
      yLabel: 'MPG',
      height: 300
    }
  );

  // More code will be added below





	const model = createModel();
	tfvis.show.modelSummary({name: 'Model Summary'}.model);

	const tensorData = convertToTensor(data);
	const{inputs,labels} = tensorData;

//train the model

	await trainModel(model, inputs, labels);
	console.log("done training");

	testModel(model, data, tensorData);

}


document.addEventListener('DOMContentLoaded', run);

function createModel() {

//creates sequential model

const model = tf.sequential();

//dds single hidden layer

model.add(tf.layers.dense({inputShape: [1], units: 1, useBias: true}));

//add ooutput layer

model.add(tf.layers.dense({units: 1, useBias: true}));

return model;

}

function convertToTensor(data) {

//tidy thingy

return tf.tidy(() => {

//shuffle data

tf.util.shuffle(data);

//convert to tensor
const inputs = data.map(d => d.horsepower);
const labels = data.map(d => d.mpg);
const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

//make normal

const inputMax = inputTensor.max();
const inputMin = inputTensor.min();
const labelMax = labelTensor.max();
const labelMin = labelTensor.min();

const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

return { 

	inputs: normalizedInputs,
	labels: normalizedLabels,
//return bounds

	inputMax,
	inputMin,
	labelMax,
	labelMin,
}

});  
}


async function trainModel(model, inputs, labels) {
	model.compile({
		optimizer: tf.train.adam(),
		loss: tf.losses.meanSquaredError,
		metrics: ['mse'],
	});
	const batchSize = 28;
	const epochs = 50;
	
	return await model.fit(inputs, labels, {
		batchSize,
		epochs,
		shuffle: true,
		callbacks: tfvis.show.fitCallbacks(
		{name: 'Training Performance'},
		['loss', 'mse'],
		{height: 200, callbacks: ['onEpochEnd']}
	)
});
}

function testModel(model, inputData, normalizationData) {
	const {inputMax, inputMin, labelMin, labelMax} = normalizationData;

	//predicts
	
	const [xs, preds] = tf.tidy(() => {
		
		const xs = tf.linspace(0,1,100);
		const preds = model.predict(xs.reshap([100,1]));
		
		const unNormXs = xs
			.mul(inputMax.sub(inputMin))
			.add(inputMin);
			
		const unNormPreds = preds
			.mul(labelMax.sub(labelMin))
			.add(labelMin);
			
		
		return [unNormXs.dataSync(),unNormPreds.dataSync()];
	});
	
	const predictedPoints = Array.from(xs).map((val,i) =>{
			return {x:val, y: preds[i]}
	});
	
	const originalPoints = inputData.map( d=> ({
		x: d.horsepower, y: d.mpg,
	}));
	
	tfvis.render.scatterplot(
	{name: 'Model Predictions vs Original Data'},
	{values: [originalPoints, predictedPoints], series: ['original', 'predicted']},
	{
		xLabel: 'Horsepower',
		yLabel: 'MPG',
		height: 300
	}
	);
}















