import React from 'react';
import { ShotChart } from "./ShotChart"
import { Radio, Switch } from 'antd';
import {CountSlider} from "./CountSlider"
import _ from 'lodash';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component{
    state = {
        minCount: 2,
        chartType: "hexbin",
        displayToolTips: true
    }

    onCountSliderChange = (value) => { //callback function
        this.setState({
            minCount: value,
        });
    }

    onChartTypeChange = (e) => { //callback function
        this.setState({
            chartType: e.target.value
        });
    }

    onTooltipChange = (checked) => {
        this.setState({
            displayToolTips:checked
        });
    }

    render(){
        const { minCount, chartType, displayToolTips} = this.state;
        return(
            <div className='data-view'>
                <ShotChart
                    playerId={this.props.playerId}
                    minCount = {minCount}
                    displayToolTips={displayToolTips}
                    chartType={chartType}
                />

                {
                    (
                        chartType === "hexbin" ?
                            <CountSlider
                                onChange={_.debounce(this.onCountSliderChange,500)}
                                defaultValue={minCount}
                            />
                            : null
                    )
                }

                <RadioGroup onChange={this.onChartTypeChange} value={chartType}>
                    <Radio value="hexbin">Hexbin</Radio>
                    <Radio value="scatter">Scatter</Radio>
                </RadioGroup>
                <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked onChange={this.onTooltipChange}/>
            </div>
        );
    }
}