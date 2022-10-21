// Get data into inspector console
function init() {
    let dropdown = d3.select('#SelDataset');
    d3.json("samples.json").then(function (data) {
        console.log("sample.json", data);
        data.names.forEach((name) => {
            dropdown.append('option').text(name).property('value', name);
        });
        const firstSample = data.names[0];
        buildChart(firstSample);
        buildMetadata(firstSample);
    });
}
// Get Demographics
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        // Filter the data for the object with the desired sample number
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];

        // Use d3 to select the panel with id of `#sample-metadata`
        var PANEL = d3.select("#sample-metadata");

        // Use `.html("") to clear any existing metadata
        PANEL.html("");

        // Use `Object.entries` to add each key and value pair to the panel
        // Hint: Inside the loop, you will need to use d3 to append new
        // tags for each key-value in the metadata.
        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });

    });
}

// Initialize page with default plot
init()

function optionChanged(newSample) {
    buildChart(newSample)
    buildMetadata(newSample)
}

function buildChart(sample) {
    d3.json("samples.json").then((data) => {
        let samples = data.samples;
        let sample_data = samples.filter(
            (sampleobject) => sampleobject.id == sample)[0];

        let ids = sample_data.otu_ids;
        let labels = sample_data.otu_labels;
        let values = sample_data.sample_values;

        // Build bar chart

        let trace = {
            y: ids.slice(0, 10).map(otuID => 'OTU $(otuID}').reverse(),
            x: values.slice(0, 10).reverse(),
            text: labels.slice(0, 10).reverse(),
            type: 'bar',
            orientation: 'h'
        };

        let data0 = [trace];

        let layout = {
            title: 'Top Ten OTUs Found',
        };

        Plotly.newPlot('bar', data0, layout);

        // Build bubble chart

        let trace1 = {
            x: ids,
            y: values,
            text: labels,
            mode: 'markers',
            marker: {
                color: ids,
                size: values,
            }
        };

        let data1 = [trace1];

        let bubble_layout = {
            xaxis: { title: "OTU ID" },
            hovermode: 'closest',
        };

        Plotly.newPlot("bubble", data1, bubble_layout);
    });




//Create Gauge

let gauge_data = [
    {
        domain: { x: [0, 5], y: [0, 1] },
        value: subject.wfreq,
        text: subject.wfreq,
        type: 'indicator',
        mode: 'gauge+number',
        delta: { reference: 10 },
        gauge: {
            axis: { range: [null, 9] },
            steps: [
                { range: [0, 1], color: 'rgb(248, 243, 236)' },
                { range: [1, 2], color: "rgb(239, 234, 220)" },
                { range: [2, 3], color: "rgb(230, 225, 205)" },
                { range: [3, 4], color: "rgb(218, 217, 190)" },
                { range: [4, 5], color: "rgb(204, 209, 176)" },
                { range: [5, 6], color: "rgb(189, 202, 164)" },
                { range: [6, 7], color: "rgb(172, 195, 153)" },
                { range: [7, 8], color: "rgb(153, 188, 144)" },
                { range: [8, 9], color: "rgb(132, 181, 137)" },
            ],
        },
    },
];

let gauge_layout = {
    title: '<b>Belly Button Washing Frequency</b> <br>Scrubs Per Week',
    width: 300,
    height: 300
};

Plotly.newPlot("gauge", gauge_data, gauge_layout);
    
}