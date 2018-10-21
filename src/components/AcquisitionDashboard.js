import React, { PureComponent } from 'react'

class AcquisitionDashboard extends PureComponent {
  componentDidMount() {
    this.props.fetchAcquisition()
  }

  render() {
    return (
      <ul>
        {this.props.acquisition.map((a, index) => (
          <li key={index}>
            {a.application}
            {a.day}
            {a.impressions}
            {a.clicks}
            {a.ctr}
            {a.cost}
            {a.country}
            {a.ad_type}
            {a.platform}
            {a.application}
            {a.package_name}</li>
        ))}
      </ul>
    )
  }

}

export default AcquisitionDashboard