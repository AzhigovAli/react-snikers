import * as React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      valueOld: '',
      changed: false,
      length: 0,
    };
  }

  input1Change = (e) => {
    let next = this.state;
    next.value = e.target.value;
    next.changed = next.value !== next.valueOld;
    next.length = e.target.value.length;
    this.setState(next);
  };

  button1Click = () => {
    alert(`РљРЅРѕРїРєР°1: Р’РІРµРґРµРЅ С‚РµРєСЃС‚ ${this.state.value}`);
  };

  button2Click = () => {
    let text = this.input2.value;
    if (text && text.length > 0) {
      alert(`РљРЅРѕРїРєР°2: Р’РІРµРґРµРЅ С‚РµРєСЃС‚ ${text}`);
    } else {
      alert(`РљРЅРѕРїРєР°2: РќРёС‡РµРіРѕ РЅРµ РІРІРµРґРµРЅРѕ`);
    }
  };

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">РџСЂРёРјРµСЂ СЃРѕ state</div>
          <div className="panel-body">
            <div className="col-sm-12">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="..."
                  ref={(ref) => (this.input1 = ref)}
                  onChange={this.input1Change}
                  value={this.state.value}
                />
                <span className="input-group-btn">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={this.button1Click}
                    disabled={!this.state.changed}>
                    Go!
                  </button>
                </span>
              </div>
              {this.state.changed && (
                <p className="text-success">РўРµРєСЃС‚ РёР·РјРµРЅРµРЅ, РІРІРµРґРµРЅРѕ {this.state.length} СЃРёРјРІРѕР»РѕРІ</p>
              )}
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">РџСЂРёРјРµСЂ Р±РµР· state</div>
          <div className="panel-body">
            <div className="col-sm-12">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="..."
                  ref={(ref) => (this.input2 = ref)}
                />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button" onClick={this.button2Click}>
                    Go!
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));