import React from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Nav from "./MainNavbar";
import DataTable from "../Data Processing/DataTable";
import {makeStyles} from "@material-ui/core/styles";
const data = [{name: '1 Марта 2022', Conversions: 590, EPC: 800, clicks: 658},
    {name: '2 Марта 2022', Conversions: 868, EPC: 967, clicks: 723},
    {name: '3 Марта 2022', Conversions: 1397, EPC: 1098, clicks: 989}];


export default class LineBarAreaComposedChart extends React.Component {

    render () {
        return (
            <div>
                <Nav/>

                <ComposedChart   width={900} height={700} data={data}
                               margin={{top: 20, right: 10, bottom: 20, left: 100}}>
                    <XAxis dataKey="name" label=""/>
                    <YAxis label=""/>
                    <Tooltip/>
                    <Legend/>
                    <CartesianGrid stroke='#f5f5f5'/>
                    <Area type='monotone' dataKey='clicks' fill='#8884d8' stroke='#8884d8'/>
                    <Bar dataKey='EPC' barSize={20} fill='#413ea0'/>
                    <Line type='monotone' dataKey='Conversions' stroke='#ff7300'/>
                </ComposedChart>
            </div>

        );
    }
}