import React, { Component } from 'react';
import { Tab, Tabs, Grid } from 'react-mdl';
import BlogTemplate from '../components/BlogTemplate';
import NotesTemplate from '../components/NotesTemplate';
import InterviewTemplate from '../components/InterviewTemplate';
import TutorialTemplate from '../components/TutorialTemplate';
import ContactFooter from '../components/ContactFooter';
import FloatButton from '../components/FloatButton';

// Simple header with scrollable tabs

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='page-content'>
          <Grid>
            <TutorialTemplate
              description='Bootstrap · The most popular HTML, CSS, and JS library in the World'
              URL='https://getbootstrap.com/docs/5.0/getting-started/introduction/'
              img='https://blog.templatetoaster.com/wp-content/uploads/2019/09/What-is-Bootstrap.jpg'
            />
            <TutorialTemplate
              description='React – A JavaScript library for building user interfaces'
              URL='https://reactjs.org/docs/getting-started.html'
              img='https://miro.medium.com/max/700/1*yjH3SiDaVWtpBX0g_2q68g.png'
            />
            <TutorialTemplate
              description='React Bootstrap - The most popular front-end framework Rebuilt for React.'
              URL='https://react-bootstrap.netlify.app/'
              img='https://www.educative.io/api/page/5816757605367808/image/download/6486746733740032'
            />
            <TutorialTemplate
              description='React-MDL : for Material Design Lite, a library of vanilla components maintained by Google.'
              URL='https://tleunen.github.io/react-mdl/components/'
              img='https://reactscript.com/wp-content/uploads/2016/04/React-MDL.png'
            />
            <TutorialTemplate
              description='Jest · Delightful JavaScript Testing framework maintained by Facebook, Inc.'
              URL='https://jestjs.io/docs/en/getting-started'
              img='https://ms314006.github.io/static/61b2001ca7ff66bffe5604dc0c52016d/5a4bd/Jest.jpg'
            />
            <TutorialTemplate
              description='Vue is a progressive framework for building user interfaces'
              URL='https://vuejs.org/v2/guide/'
              img='https://miro.medium.com/max/1000/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg'
            />
            <TutorialTemplate
              description='Angular is a platform for building mobile and desktop web applications.'
              URL='https://angular.io/docs'
              img='https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-760x400.png'
            />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className='page-content'>
          <Grid>
            <InterviewTemplate
              description='Top 50 MySQL Interview Questions & Answers	'
              URL='https://career.guru99.com/top-50-mysql-interview-questions-answers/'
              img='https://career.guru99.com/wp-content/uploads/2014/07/MySQL.svg_.png'
            />
            <InterviewTemplate
              description='44 Practical Apache Web Server Interview Questions with Answers'
              URL='https://geekflare.com/apache-interview-questions-answers/'
              img='https://pbs.twimg.com/media/DWbNPSFV4AAtIry?format=jpg&name=small'
            />
            <InterviewTemplate
              description='Build An Automated Testing Pipeline With GitLab CI/CD & Selenium Grid'
              URL='https://www.lambdatest.com/blog/automated-testing-pipeline-with-gitlab-ci-cd-and-selenium/'
              img='https://www.lambdatest.com/blog/wp-content/uploads/2020/03/GitLab-CI-CD-and-Selenium-Grid.jpg'
            />
            <InterviewTemplate
              description='What is Black Box Testing?'
              URL='https://www.rainforestqa.com/blog/2018-10-26-what-is-black-box-testing'
              img='https://wp-images.rainforestqa.com/wp-content/uploads/2018/01/fb5ae6a9088b3b48cff4e4a29de06359.png'
            />
            <InterviewTemplate
              description='white box testing'
              URL='https://searchsoftwarequality.techtarget.com/definition/white-box'
              img='http://4.bp.blogspot.com/-_LCeNcoLr8c/USSeshoupNI/AAAAAAAAAkM/SxZkrvutuGc/s1600/white-box-testing.png'
            />
            <InterviewTemplate
              description='7 Web Developer Interview Questions and Answers'
              URL='https://www.indeed.com/hire/interview-questions/web-developer?aceid=&gclid=Cj0KCQjwyJn5BRDrARIsADZ9ykFxa2SmNgl6dWXeAgjjPsdIJjtvbRsB61FJIMz3pXVTzkf2-iY4J-QaAm3gEALw_wcB'
              img='https://cdn.seeklearning.com.au/media/images/career-guide/article/career-advice/web_images/blogs/214/3725/how_to_prepare_for_a_video_interview_like_a_pro_940x485.jpg'
            />
          </Grid>
        </div>
      );
    // } else if (this.state.activeTab === 2) {
    //   return (
    //     <div className='page-content'>
    //       <Grid>
    //         <InterviewTemplate
    //           description='12 Beginner Python Projects - Youtube Coding Course'
    //           URL='https://www.youtube.com/watch?v=8ext9G7xspg'
    //           img='https://hackr.io/blog/python-projects/thumbnail/large'
    //         />
    //       </Grid>
    //     </div>
    //   );
    } 
  }

  render() {
    return (
      <div className='blog-grid'>
        {/* <div className='page-title' style={{
          left: '50%',
          display: 'flex',
        }}>
          <h2>BLOG</h2>
          <hr />
        </div> */}
        <div className='page-content'>
          <div className='blog-tabs'>
            <Tabs
              activeTab={this.state.activeTab}
              onChange={(tabId) => this.setState({ activeTab: tabId })}
              ripple
            >
              <Tab>Tutorials</Tab>
              <Tab>Interview</Tab>
              {/* <Tab>Coding</Tab> */}
            </Tabs>
            <section>
              <div className='content'>{this.toggleCategories()} </div>
            </section>
          </div>
        </div>
        <FloatButton/>
        <ContactFooter />
      </div>
    );
  }
}

export default Blog;
