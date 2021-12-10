import PlotlyLineChart from './PlotlyLineChart'

function AlloviewResultsContainer() {

    var chartData = [
        'Creatinine',
        'EFGR',
        'BK Views',
        'Proteinuria',
        'DSA',
        'AlloSure',
        'AlloSure Probablities',
        'AlloView Report'
    ]

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex">
                    <div >
                        <label for="dateRange" class="col-form-label">Date Range</label>
                    </div>
                    <input type="date" id="dateRange" className="ms-4" />
                </div>
                <div className="col-md-6 ">
                    <div className="text-end">
                        <select>
                            <option>
                                Chart View
                            </option>
                            <option>option 2</option>
                            <option>option 3</option>
                        </select>
                        <select className="ms-4">
                            <option>
                                3 Months
                            </option>
                            <option>option 2</option>
                            <option>option 3</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">

                {
                    chartData.map(c => {
                        return (
                            <div className="col-md-6">
                                <div className="border border-2  mt-4">
                                    <PlotlyLineChart chartData={c} />
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="border border-2  mt-4 p-2">
                        <div className="row">
                            <div className="col-md-12 text-start">
                                <label className="text-start fw-bold">Date of TX</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 d-flex">
                                <div >
                                    <label for="dateRange" class="col-form-label">Date of transplant</label>
                                </div>
                                <input type="date" id="dateRange" className="ms-4" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                                <div >
                                    <label for="dateRange" class="col-form-label">Prior transplant</label>
                                </div>
                                <div className="me-3 ms-3  d-flex align-items-center">
                                    <input type="radio" name="yesNo" /> Yes
                                    <input type="radio" name="yesNo" className="ms-3" /> No
                                </div>
                                <div className="d-flex align-items-center">
                                    <label className="me-3  ">If yes, date</label>
                                </div>
                                <input type="date" id="dateRange" className="ms-4" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 d-flex">
                                <div >
                                    <label for="dateRange" class="col-form-label">Prior Rejection</label>
                                </div>
                                <input type="text" className="ms-4" />
                                <input type="date" id="dateRange" className="ms-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="border border-2  mt-4 p-2">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="fw-bold">Patients who look like this cohort have a 77% likelihood of needing a biopsy to assess organ rejection.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="border border-2 border-top-0  p-2">
                        <div className="row">
                            <div className="col-md-12" style={{height: '200px'}}>
                                Chart placeholder here
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlloviewResultsContainer;
