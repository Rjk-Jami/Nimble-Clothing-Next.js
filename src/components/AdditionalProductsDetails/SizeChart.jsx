import React from 'react'

const SizeChart = () => {
return (
    <div className="overflow-x-auto mx-10 lg:mx-0 text-sm ">
        <table className="table w-full">
            <thead>
                <tr>
                    <th>Size</th>
                    <th>Chest (in)</th>
                    <th>Waist (in)</th>
                    <th>Hip (in)</th>
                    <th>Inseam (in)</th>
                    <th>Neck (in)</th>
                    <th>Sleeve (in)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>XS</td>
                    <td>32-34</td>
                    <td>24-26</td>
                    <td>34-36</td>
                    <td>30</td>
                    <td>15</td>
                    <td>32</td>
                </tr>
                <tr>
                    <td>S</td>
                    <td>34-36</td>
                    <td>26-28</td>
                    <td>36-38</td>
                    <td>30</td>
                    <td>15.5</td>
                    <td>33</td>
                </tr>
                <tr>
                    <td>M</td>
                    <td>36-38</td>
                    <td>28-30</td>
                    <td>38-40</td>
                    <td>30</td>
                    <td>16</td>
                    <td>33.5</td>
                </tr>
                <tr>
                    <td>L</td>
                    <td>38-40</td>
                    <td>30-32</td>
                    <td>40-42</td>
                    <td>30</td>
                    <td>16.5</td>
                    <td>34</td>
                </tr>
                <tr>
                    <td>XL</td>
                    <td>40-42</td>
                    <td>32-34</td>
                    <td>42-44</td>
                    <td>30</td>
                    <td>17</td>
                    <td>34.5</td>
                </tr>
                <tr>
                    <td>XXL</td>
                    <td>42-44</td>
                    <td>34-36</td>
                    <td>44-46</td>
                    <td>30</td>
                    <td>17.5</td>
                    <td>35</td>
                </tr>
            </tbody>
        </table>
    </div>
)
}

export default SizeChart
