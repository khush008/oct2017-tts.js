$(function () {

    // Create the chart
    $("#container").highcharts({
        chart: {
            type: "bar"
        },
        title: {
            text: "TTs Rise Report"
        },
        xAxis: {
            type: "category"
        },

        legend: {
            enabled: false
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                }
            }
        },

        series: 
		[	{
				name: "MAIN TTS",
				colorByPoint: true,
				data: 
				[	{
					name: "BRD1",
					y: 5,
					drilldown: "IDbrd1"
					},
					{
					name: "BRD2",
					y: 5,
					drilldown: "IDbrd2"
					},
					{
					name: "BRD3",
					y: 5,
					drilldown: "IDbrd3"
					},
					{
					name: "BRD4",
					y: 5,
					drilldown: "IDbrd4"
					},
					{
					name: "BRD5",
					y: 5,
					drilldown: "IDbrd5"
					},
				]
			},
		],
        drilldown:
		{
            series: 
			[	{
					id: "IDbrd1",
					name: "Vishal ZONE TTs",
					data: 
					[		{
							name: "node01",
							y: 4,
							drilldown: "IDZ1node1"
							},
							{
							name: "node02",
							y: 6,
							drilldown: "IDZ1node2"
							},
							{
							name: "node03",
							y: 6,
							drilldown: "IDZ1node3"
							},
							{
							name: "node04",
							y: 6,
							drilldown: "IDZ1node4"
							},
							{
							name: "node05",
							y: 6,
							drilldown: "IDZ1node5"
							},
					]
				},
				{
					id: "IDbrd2",
					name: "SUNIL",
					data: 
					[		{
							name: "node01",
							y: 4,
							drilldown: "IDZ2node1"
							},
							{
							name: "node02",
							y: 6,
							drilldown: "IDZ2node2"
							},
							{
							name: "node03",
							y: 6,
							drilldown: "IDZ2node3"
							},
							{
							name: "node04",
							y: 6,
							drilldown: "IDZ2node4"
							},
							{
							name: "node05",
							y: 6,
							drilldown: "IDZ2node5"
							},
					]
				},
				{
				id: "IDZ1node1",
				data: 
					[	{
						name: "DAY01",
						y: 5,
						drilldown: "IDZ2node1day1"
						}
					]		
				},
				{
				id: "IDZ2node1day1",
				data: 
					[	{
						name: "1pm",
						y: 5,
						drilldown: "IDZ2node1day11pm"
						}
					]		
				},
				{
				id: "IDZ2node1day11pm",
				data: [11, 22, 33]
				},
				{
				id: "IDZ1node2",
				data: [11, 22, 33]
				},
				{
				id: "IDZ1node3",
				data: [12, 22, 33]
				},
				{
				id: "IDZ1node4",
				data: [11, 22, 33]
				},
				{
				id: "IDZ1node5",
				data: [11, 22, 33]
				},
				{
				id: "IDZ2node1",
				data: [1, 2, 3]
				},
					
			]
        }
    })
});
