import React, { Component } from 'react';
import Footer from './Footer';

class Topics extends Component {

  constructor(props)
  {
    super(props);
    this.state =
    {
      open: Array(topics.length).fill(false)
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

  render()
  {
    const accordion = topics.map((i) =>
    {
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
            <img src={this.props.topicsJPG} alt="Topics" />
          </div>
          <div className="body-table">
            {accordion}
          </div>
          <Footer />
        </div>

    );
  }

}

const topics =
[
  {
    title:   'Ankle Instability',
    id:      0,
    content: 'In some individuals, frequent or severe ankle sprains lead to instability of the ankle, causing the ankle to twist frequently.  This can be helped with ankle braces and physical therapy and in some instances surgical repair of the ligaments is necessary.'
  },
  {
    title:   'Arthritis',
    id:      1,
    content: 'Arthritis frequently occurs in feet and can cause pain in the feet, especially first thing in the morning and after sitting and then standing. Treatment includes antiinflammatory medicines such as ibuprofen, arch supports, injections, and in some cases surgery to correct the problem.'
  },
  {
    title:   'Bunions',
    id:      2,
    content: 'Bunions are caused by widening of the bones on the fore part of the foot and often hallux valgus or pointing of the toe towards the lesser toes.  Bunionettes or Tailor\'s bunions occur on the outsides of the feet by the little toe.  Treatment includes pads, wider shoes, antiinflammatory pills, arch supports, and in some cases surger to correct the problem.'
  },
  {
    title:   'Diabetes and Feet',
    id:      3,
    content: 'Diabetes, especially poorly controlled diabetes, can lead to loss of feeling in the feet and poor circulation.  This can be a setup for problems which can be severe and sometimes life and limb threatening.  It is recommended that individuals with diabetes see a podiatrist at least once a year and more often if neuropathy or deformities are present.  By keeping regular visits with a podiatrist, diabetics can avoid serious problems.  Some studies indicate a 40-50 percent reduction in severe foot problems such as amputations for those who regularly see a Podiatrist.'
  },
  {
    title:   'Flat Feet',
    id:      4,
    content: 'Flat Foot conditions can be painful and sometimes disabling.  Usually a proper set of custom orthotic arch supports can be made to improve the condition.  In severe cases, surgery can be done to correct the problem.'
  },
  {
    title:   'Hammertoes',
    id:      5,
    content: 'Hammertoes are a condition caused by foot imbalances where the toes "grip" to attempt to stabilize the foot.  They can be rigid or flexible and depending on the type, splints can be used to straighten them out.  More rigid toes often require surgery.'
  },
  {
    title:   'Heel Spurs and Plantar Fasciitis',
    id:      6,
    content: 'Heel pain is one of the most common foot problems and is often seen in people who spend a lot of their day on their feet.  Treatment can include arch supports, pads, and antiinflammatory pills such as ibuprofen.  More advanced treatments include custom orthotic arch supports, injections with cortisone, and in some cases surgery.'
  },
  {
    title:   'Ingrown Toenails',
    id:      7,
    content: 'Ingrown toenails are fairly common problems that sometimes can be fixed with medication or slight trimming of the nail.  In other instances, surgery is required to permanently remove part or all of the toenail.'
  },
  {
    title:   'Toenail Fungus',
    id:      8,
    content: 'This can be a challenging condition to cure.  The fungus while easy to treat, hides well from the body\'s defenses and medications under and in the toenail.  Effective treatments include Laser, pills that can be taken for 4-12 months and paint on topical medications.  The type of treatment varies depending on the health of the individual and the extent of the  condition.'
  },
  {
    title:   'Warts',
    id:      9,
    content: 'Warts are skin lesions that are caused by a skin virus.  Most warts can be effectively treated with topical medications.  Warts on the bottom of the foot, called Plantar Warts can be more challenging to treat.  There are a variety of treatments available including topical medications, injections, and excision of the lesion.'
  }
]

export default Topics;
