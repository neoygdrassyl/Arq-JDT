import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/es';
import 'moment/locale/fr';

class List extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    const token = "EAAQuXCVkacMBABmoUQdTQmShUzfYguce1FGELZAHdZAvZB6x1qv9ERTl5UwQwuiryOIkekkXb5wa3i7SAEZC3AryLdl9JPpOZAnsE6FBuC6Js3TTpllsGZC2WGy6oWMa1IVPDDXkvP2tcllQEa4IHfZA9iedL1k3fVFdxwP83lbZBkNmZBnmAooYd"
    const PageID = 105379948265750
    const fields = "published_posts{message%2Cfull_picture%2Cpermalink_url%2Ccreated_time}"
    const version = "v10.0"
    fetch("https://graph.facebook.com/" + version + "/" + PageID + "?fields=" + fields + "&access_token=" + token)
      .then(response => response.json())
      .then(json => {
        //console.log(json.published_posts.data);
        this.setState({ data: json.published_posts.data });
      });
  }

  render() {
    const { data } = this.state;
    const { translation } = this.props;
    return (
      <div className="App">
        {/* Check to see if any items are found*/}
        {data.length ? (
          <div>
            {/* Render the list of items */}
            {data.map((item) => {
              return (
              <div class="container mb-5">
                <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                  <div class="col-lg-6"><img class="img-fluid mb-3 mb-lg-0" src={item.full_picture} alt="" /></div>
                  <div class="col-lg-6">
                    <div class="bg-dark text-center h-100 project">
                      <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-left">
                          <h4 class="text-white">{translation.str_title}</h4>
                          <h4 class="text-white">{item.message}</h4>
                          <hr class="d-none d-lg-block mb-0 ml-0" />
                          <p>
                            <a href={item.permalink_url} class="text-white-50">{translation.redirect}</a></p>
                          <p class="text-white-50 mb-0">{translation.str_date}
                            <Moment format="DD MMMM YYYY" locale={translation.str_lang}>
                            {item.created_time}
                          </Moment></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No data retrieved</h2>
          </div>
        )
        }
      </div>
    );
  }
}

export default List;
