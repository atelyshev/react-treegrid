import React from 'react';
import '../static/custom.css'
import UUID from 'uuid'

const LEVEL_OFFSET = 16

class Row extends React.Component {

    constructor(props) {
        super(props)
    }

	callback = (event) => {
		if(this.props.callback !== undefined) {
			this.props.callback(this.props.data);
		}
	}

	btnCallback = (event) => {
		event.stopPropagation();
		let i = event.currentTarget.getAttribute('data-col')
		if (this.props.options.fields[i].callback !== undefined) {
			this.props.options.fields[i].callback(this.props.data);
		}
	}
	
    getExpandIcon = (data, clickHandler) => {
        if (data._hasChildren) {
            if (data._showChildren) {
                return <span className="treegrid-expander"><i className="fa fa-minus" onClick={clickHandler}></i></span>
            }

            return <span className="treegrid-expander"><i className="fa fa-plus" onClick={clickHandler}></i></span>
        }

        return <span className="treegrid-expander"></span>
    }

    clickHandler = (event) => {
        if (this.props.data._hasChildren) {
            this.props.onClick(this.props.data._key, this.props.index);
			event.stopPropagation();
        }
    }

    getIndent(level) {
        return <span className="treegrid-indent" style={{width: level * LEVEL_OFFSET}}></span>
    }

    getContent = (field, i) => {
        var format = field.format
		var property = field.property

        if (format && typeof format === 'function') {
            return format(this.props.data[property])
        }

		if (field.type !== undefined && field.type === 'button') {
			return <button type="button" class="btn btn-primary" data-col={i} onClick={this.btnCallback}>{field.caption}</button>
		}

        if (this.props.data[property] === null 
		    || this.props.data[property] === undefined) {
            return ''
        }

        return this.props.data[property]
    }


    render() {
        if (!this.props.data._visible) {
            return null
        }

        var hasChildren = this.getExpandIcon(this.props.data, this.clickHandler.bind(this))

        const items = this.props.options.fields.map((field, i) => {
            if (field.property === 'children') {
                return null
            }

            var expandIcon
            var offset = i === 0 ? this.getIndent(this.props.level) : null

            if (i === 0) {
                expandIcon = hasChildren
            }
            
            return (
                <td key={`${this.props.data._id}_${field.property}_${UUID.v4()}`} >
                    <div>
                        {offset}
                        {expandIcon}
                        {this.getContent(field, i)}
                    </div>
                </td>
            )
        })

        return (
        <tr onClick = {this.callback}>
            {items}
        </tr>
        )
    }
}

export default Row
