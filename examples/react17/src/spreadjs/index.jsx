import React, { useEffect, useRef } from 'react';
import jsonData from './jsonData.js';

export const uuid = () => {
    const s = [];
    const hexDigits = '0123456789abcdef';
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    // s[8] = s[13] = s[18] = s[23] = "-";
    s[8] = '';
    s[13] = '';
    s[18] = '';
    s[23] = '';
    return s.join('');
    // uuid = uuid.replace(new RegExp('-', 'g'), '');
};

export default class Spread extends React.Component {
    id = 's' + uuid();
    initSpread(spread) {
        spread.fromJSON(jsonData);
        var sheet = spread.getSheet(3);
        sheet.getCell(0, 2).textDecoration(window.GC.Spread.Sheets.TextDecorationType.lineThrough);
        sheet.getCell(0, 3).textDecoration(window.GC.Spread.Sheets.TextDecorationType.overline);
        sheet.getCell(0, 4).textDecoration(window.GC.Spread.Sheets.TextDecorationType.underline);
    }
    componentDidMount() {
        const dom = document.getElementById(this.id);
        const spread = new window.GC.Spread.Sheets.Workbook(dom);
        this.initSpread(spread);
    }
    render() {
        return <div style={{ width: 1000, height: 5000 }} id={this.id}></div>;
    }
}
