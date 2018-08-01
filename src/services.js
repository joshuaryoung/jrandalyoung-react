import React, { Component } from 'react';
import Footer from './Footer';

class Service extends Component {

  constructor(props)
  {
    super(props);
    this.state =
    {
      open: Array(services.length).fill(false)
    };
  }

  handleAccordionClick(id)
  {
    const _open = Array(this.state.open.length).fill(false)

    if(this.state.open[id])
    {
      _open[id] = false;
    }
    else
    {
      _open[id] = !_open[id];
    }
    this.setState({
      open: _open
    });
  }

  render() {
    const accordion = services.map((i) => {
      return(
        <div key = {i.id}>
          <button className={"accordion" + (this.state.open[i.id] ? ' active' : '')} onClick={this.handleAccordionClick.bind(this, i.id)}>

            {i.title} </button>

          <div className={"panel"+ (this.state.open[i.id] ? ' active' : '')}>

            <p>{i.content}</p>

          </div>
        </div>
      )
    });

    return (
      <div className="body-container">

        <div className="body-image-container">

          <img src={this.props.footServices} alt="Services"
          className="body-image" />

        </div>

        <div className="body-table">

          {accordion}

        </div>

        <Footer />

      </div>
    );
  }

}

const services =
[
  {
    title:   'Fractures/Broken Bones',
    id:      0,
    content: 'Foot and ankle fractures can sometimes be treated without surgery. If surgery is  required, the latest techniques can allow for earlier return to weight bearing and normal function.'
  },
  {
    title:   'Heel Spur And Plantar Fasciitis',
    id:      1,
    content: 'Heel pain is one of the most common foot complaints. Often, the condition can be improved with orthotic arch supports and medications. Occasionally, cortisone injections and surgery are required to improve the condition.'
  },
  {
    title:   'Deformities (Bunions, Hammertoes)',
    id:      2,
    content: 'Foot deformities such as bunions and hammertoes sometimes can be painful and can be treated with pads and adjustments to shoes. In more severe, cases reconstructive surgery may be required.'
  },
  {
    title:   'Toenail Fungus and Ingrown Toenails',
    id:      3,
    content: 'New innovations such as laser toenail treatments and medications can permanently cure fungus in toenails. Simple procedures also can cure ingrown toenails permanently.'
  },
  {
    title:   'Diabetic Foot Care',
    id:      4,
    content: 'Feet are a part of the body that is frequently affected by Diabetes Mellitus. Regular foot examination including evaluation of the nerves and circulation of the feet is critical to avoid more severe problems that can occur. Podiatrists play a critical role in caring for the diabetic foot. Diabetic protective shoes and insoles are usually covered by insurance and can protect feet from injury which may lead to more serious problems.'
  },
  {
    title:   'Flat Feet',
    id:      5,
    content: 'Orthotic arch supports can be critical to improve foot pain caused by flat feet. Use of arch supports can often help to avoid foot surgery to correct flat feet.'
  },
  {
    title:   'Skin Problems',
    id:      6,
    content: 'Warts, lumps, cysts, and varicose veins can be treated with a variety of procedures including Laser treatment.'
  }
]

export default Service;
