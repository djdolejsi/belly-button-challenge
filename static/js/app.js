// Get Demographics
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        // Filter the data for the object with the desired sample number
        var resultArray = metadata.filter(sampleobject => sampleobject.id == sample);
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

// Start to build bar and bubble chart

function buildCharts(sample) {

    // Use `d3.json` to fetch the sample data for the plots
    d3.json("samples.json").then((data) => {
      var samples= data.samples;
      var resultsarray= samples.filter(sampleobject => 
          sampleobject.id == sample);
      var result= resultsarray[0]
    
      var ids = result.otu_ids;
      var labels = result.otu_labels;
      var values = result.sample_values;
    
    
    // Build a BUBBLE Chart 
    
    
      var LayoutBubble = {
        margin: { t: 0 },
        xaxis: { title: "OTU ID" },
        hovermode: "closest",
        };
    
        var DataBubble = [ 
        {
          x: ids,
          y: values,
          text: labels,
          mode: "markers",
          marker: {
            color: ids,
            size: values,
            }
        }
      ];
    
      Plotly.newPlot("bubble", DataBubble, LayoutBubble);
    
    
    
    // Build a BAR Chart
     
      var bar_data =[
        {
          y:ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
          x:values.slice(0,10).reverse(),
          text:labels.slice(0,10).reverse(),
          type:"bar",
          orientation:"h"
    
        }
      ];
    
      var barLayout = {
        title: "Top 10 Bacteria Cultures Found",
        margin: { t: 30, l: 150 }
      };
    
      Plotly.newPlot("bar", bar_data, barLayout);
    });
    }

// Get data into inspector console
function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
    
    // Use the list of sample names to populate the select options
    d3.json("samples.json").then((data) => {
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
    
      // Use the first sample from the list to build the initial plots
      const firstSample = sampleNames[0];
      buildMetadata(firstSample);
      buildCharts(firstSample);
      buildGaugeChart(firstSample)
    
    
    });
    }
    
    function optionChanged(newSample) {
    // Get new data each time a new sample is selected
    buildMetadata(newSample);
    buildCharts(newSample);
    buildGaugeChart(newSample)
    
    }
    
    
    
    // Initialize the dashboard
    init();