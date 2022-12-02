import React from 'react';
import "../assets/css/demo/nit-styles.css"

const Dashboard = () => {
    return (
        <>

        
           <div class="nit-container nit-margin-left">
        <h5>Feeds</h5>
        <table class="nit-table nit-striped nit-white">
          <tr>
            <td><i class="fa fa-user nit-text-blue nit-large"></i></td>
            <td>New record, over 90 views.</td>
            <td><i>10 mins</i></td>
          </tr>
          <tr>
            <td><i class="fa fa-bell nit-text-red nit-large"></i></td>
            <td>Database error.</td>
            <td><i>15 mins</i></td>
          </tr>
          <tr>
            <td><i class="fa fa-users nit-text-yellow nit-large"></i></td>
            <td>New record, over 40 users.</td>
            <td><i>17 mins</i></td>
          </tr>
          <tr>
            <td><i class="fa fa-comment nit-text-red nit-large"></i></td>
            <td>New comments.</td>
            <td><i>25 mins</i></td>
          </tr>
          <tr>
            <td><i class="fa fa-bookmark nit-text-blue nit-large"></i></td>
            <td>Check transactions.</td>
            <td><i>28 mins</i></td>
          </tr>
          <tr>
            <td><i class="fa fa-laptop nit-text-red nit-large"></i></td>
            <td>CPU overload.</td>
            <td><i>35 mins</i></td>
          </tr>
          <tr>
            <td><i class="fa fa-share-alt nit-text-green nit-large"></i></td>
            <td>New shares.</td>
            <td><i>39 mins</i></td>
          </tr>
        </table>
      </div>
      </>
    );
};

export default Dashboard;