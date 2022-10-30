# belly-button-challenge

In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

# Instructions

1. Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a. Use sample_values as the values for the bar chart.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b. Use otu_ids as the labels for the bar chart.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c. Use otu_labels as the hovertext for the chart.

![image](https://user-images.githubusercontent.com/105513598/198894828-fe007233-fbcd-43d8-9ac9-b3d31c5a0032.png)

3. Create a bubble chart that displays each sample.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a.Use otu_ids for the x values.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b. Use sample_values for the y values.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c. Use sample_values for the marker size.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; d. Use otu_ids for the marker colors.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; e. Use otu_labels for the text values.

![image](https://user-images.githubusercontent.com/105513598/198894851-70db259f-cafb-4e05-8842-465c565dc480.png)

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

![image](https://user-images.githubusercontent.com/105513598/198894871-860b757a-a2ce-4931-b85d-93a02916cded.png)

6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

![image](https://user-images.githubusercontent.com/105513598/198894900-3c42afaa-9c4c-4dd2-89a5-55375070bc46.png)
