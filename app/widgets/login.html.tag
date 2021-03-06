<loading>
  <div class="uk-text-center">
    Loading app ...
    <i class="uk-icon-spinner uk-icon-spin"></i>
  </div>

  <script>
    $.get(url + "login/whoami", function(d) {
      if(d.username === null) riot.route('/login'); 
      else riot.route('/demousers'); 
    })
  </script>
</loading>

<login>
  <div class="uk-container uk-container-center">
    <div class="uk-grid">
      <div class="uk-width-3-10"></div>
      <div class="uk-width-4-10">
        <div class="uk-margin-top uk-text-center">
          <h2>Foxx - RiotJS</h2>
          <h3>Authentication</h3>
          <p>
          Please use demo@demo.com as login <br>and demo as password</p>
        </div>
        <form class="uk-form uk-margin-top"  onsubmit="{ save_form }">
           <label for="" class="uk-form-label">Email</label>
           <div class="uk-form-controls">
             <input type="text" placeholder="john@doe.com" class="uk-width-1-1" id="username" name="username" value="demo@demo.com">
           </div>
           <label for="" class="uk-form-label">Password</label>
           <div class="uk-form-controls">
             <input type="password" placeholder="********" class="uk-width-1-1" id="password" name="password" value="demo">
           </div>
           <div class="uk-form-controls uk-margin-top">
             <button type="submit" class="uk-width-1-1 uk-button">Connection</button>
           </div>
           
        </form>
      </div>
      <div class="uk-width-3-10"></div>
    </div>
  </div>
  
  <script>
    save_form(e) {
      $.post(url + "login/login", JSON.stringify({ "username": $("#username").val(), "password": $("#password").val() }) , function(data) {
        if(data.success) riot.route('/demousers')
      })
    }
  </script>

</login>