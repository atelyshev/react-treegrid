React-TreeGrid
===================
This is improved version of original react-treegrid. I just added row level onClick reaction which makes that grid useful.
Also added button type as cell contant with callback
React TreeGrid is a react component built to easily render a table showing the properties of objects in a tree structure.

Check out the [example project](https://github.com/PhillBeck/react-gridtree-example) and the [live demo](https://phillbeck.github.io/react-gridtree-example/)


![](https://drive.google.com/file/d/1oItGtDvPLN8Ut8ha6UfCCcqlx3FrF4Gw/view)


Installation
-----
 
```
npm install react-treegrid-2
```

Usage
-------

Example:
```
<TreeGrid
	data={[
		{
			name: "item 1"
			qty: 2,
			children: [
				{
					name: "item 1.1",
					qty: 1
				}
			]
		},
		{
			name: "item 2",
			qty: 4
		}
	]}
	options={{
		fields: [
			{ 
				property: 'name',
				colHeader: 'Name',
				width: '70%' 
			},
			{
				property: 'qty',
				colHeader: 'Quantity',
				format: (value) => value.toFixed(2)
			}, 
			// Custom field with button
                        {
				type: 'button',
				callback: this.addOrganization,
				// In case you need internationaliation pass FormattedMessage as header 
				// and button caption
				colHeader: <FormattedMessage id="org.edit.type" defaultMessage="Action"/>,
				caption: <FormattedMessage id="org.edit.type" defaultMessage="Add sub-org"/>,
				width: '5%'
                      }
		]
	}}
/>
```

> **Notes:**
> - Styling not yet supported
> - The **children** attribute is reserved for the objects that will be shown inside the parent

----

Props
----------
**callback**
If you need on click reaction then attach callback. It will return data section related with current row.
  onRowClick = (data) => {
    alert(data);
  }

callback={this.onRowClick}

**data**
Data to be displayed. Should be an array of objects. Each object's `children` property should be an array of nested objects.
```
data = [
	{
		name: "item 1"
		qty: 2,
		children: [
			{
			name: "item 1.1",
			qty: 1
			}
		]
	},
	{
		name: "item 2",
		qty: 4
	}
]
```
----

**options**
Object that can contain the properties:

- **fields** - Required
fields should be an array containing one object for each data property that should be displayed. This object can have the properties:
 - **property** - Required
 The name of the data property (e.g. "name")
 
 - **colHeader** - Required
The text to be shown on the table header (e.g. "Name")

- **type**
By default fields have type 'text', but in case button needed specify type: 'button'

- **caption**
Only applicable for type 'button'

- **callback** 
Only applicable for type 'button' 
callback: this.onButtonClick

 - **width**
The width of the column (e.g. "50%")

 - **format**
 A function that receives the data value, and returns a formatted text to be shown (e.g. `(value) => value.toFixed(2)`

```
options = {
	fields: [
		{ 
			property: 'name',
			colHeader: 'Name',
			width: '70%' 
		},
		{
			property: 'qty',
			colHeader: 'Quantity',
			format: (value) => value.toFixed(2)
		}
	]
}
```
