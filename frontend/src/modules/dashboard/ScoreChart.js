import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import useFbStorage from '../../hooks/firebaseStorage';

const ScoreChart = () => {
    const [items] = useFbStorage();
    const [selectedWeb, setWeb] = useState('');

    const distinct = (value, index, self) => {
        return self.indexOf(value) === index;
    }

    const distinctWeb = items.map(item => item.name).filter(distinct);

    const dropdownItems = distinctWeb.map(item => (
        <Dropdown.Item eventKey={item} key={item}>{item}</Dropdown.Item>
    ))
    const HistoryBarChart = ({ webName }) => {
        const webData = items.filter(item => item.name === webName);
        if (webData.length === 0) {
            return 'No Information';
        }
        return (
            <Bar
                data={{
                    labels: webData.map(item => item.date.toDate()),
                    datasets: [{
                        label: 'Websites score',
                        data: webData.map(item => item.score),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }}
                options={{
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }}
            />)
    }

    return (
        <div className="container">
            <h2>Web Scoring History</h2>
            <DropdownButton
                variant="outline-secondary"
                title="Select website"
                id="selectedWeb"
                onSelect={event => setWeb(event)}
            >
                {dropdownItems}
            </DropdownButton>

            <HistoryBarChart webName={selectedWeb} />
        </div>
    );
};

export default ScoreChart;