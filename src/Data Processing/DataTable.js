import React, {useMemo} from 'react';

import Table from "../Components/Table";
import styled from 'styled-components'
import "../fonts/EuclidCircularA/stylesheet.css"
export default class DataTable extends React.Component {
    constructor(props) {

        super(props);

        let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTUzMDc1MDgsImV4cCI6MTY1NTMxMTEwOCwicm9sZXMiOlsiUk9MRV9ST09UIiwiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoicm9vdCJ9.XBPnRrlsK8dvlnBXzHAvS4AD2oeZUaSkXlMO_IPS0XQTHUrt7T3Emu4IaDpjNGWfyu_tHj7vKk_KgaLMoSzIn31t34_HQDgSyfLumTLUyxROHqEdMnbICeTBKV4UUTSBmqt6tHIyMb3JZvj1V2wagpqbFlh_82el-flFI61yq1C52V96YpHM3CTOm9HKMQgBYR-nyVCgwd9oNVrLUZwEYHP6L5yTYgGShnJq5hEqW6Xkrd1heWlOJuUhhBYwtQKdmfZYWuQqpoAmL_JhFW270DffifEaW8kV_pcWbBaiYZ7SnGuvmitnMKidBUWQ4jgyXKC9GmaGYG_oO1HRJlFFpg'

        this.state = {
            error: null,
            isLoaded: false,
            token: token,
            username:null,
            password:null
        };

        this.columnsMemo = [
            {
                Header: "ID",
                accessor: "id"
            },
            {
                Header: "Браузер",
                accessor: "deviceBrowser",

            },
            {
                Header: "ОС",
                accessor: "deviceOs"
            },
            {
                Header: "Date",
                accessor: "Date"
            },
            {
                Header: "Тип устройства",
                accessor: "deviceType"
            },

            {
                Header: "IP",
                accessor: "ip"
            },

            {
                Header: "Страна",
                accessor: "country"
            },

            {
                Header: "User Agent",
                accessor: "userAgent"
            },

            {
                Header: "UTM Метка",
                accessor: "utmSource"
            },

            {
                Header: "Utm Medium",
                accessor: "utmMedium"
            },

            {
                Header: "Utm Campaign",
                accessor: "utmCampaign"

            },

        ];
    }



    componentDidMount() {
        fetch("http://localhost/api/v1/clicks", {headers: {'Authorization': `Bearer ${this.state.token}` }})
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        const Styles = styled.div`
          margin: 20px;
          table-layout:auto;
          moz-border-radius: 5px; /* Firefox */
          -webkit-border-radius: 5px; /* Safari, Google Chrome */
          -khtml-border-radius: 5px; /* KHTML */
          -o-border-radius: 5px; /* Opera */
          -ms-border-radius: 5px; /* IE8 */
          border-radius: 5px; /* CSS3 */
          
          border: 1px solid #E6E7EC;

  table {
   
    
  }
          
          
    tr {
      height: 60px;
      font-size: 13px;
      font-weight: bolder;
      font-family:Euclid Circular A,Helvetica, "Trebuchet MS", Verdana, sans-serifHelvetica, "Trebuchet MS", Verdana, sans-serif;
      :last-child {
        td {
          color:#232335;
          border-bottom: 0;
        }
      }
    }
    thead{
      color:#8E8E98;
      background-color:#F8F8F8;
      
    }
    th,
    td {
      
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #E6E7EC;
      border-right: 1px solid #E6E7EC;

      :last-child {
        border-right: 0;
      }
    }
  }
`



        const { error, isLoaded, data } = this.state;

        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
                <div>
                    <br></br>
                <Styles><Table class="Tab" columns={this.columnsMemo} data={data}/></Styles></div>

            );
        }
    }
}