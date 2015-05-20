if(window.location.pathname === '/') {

  QUALITIES = {
    0: "swill",
    1: "plausible",
    2: "genius"
  }

  $(document).ready(function() {
    makeIdeas();

    $("#save-btn").click(function() {
      save();
    });

    $("#search").val("");

    $("#search").keyup(function() {
      userInput = this.value;
      if (userInput ===  "") {
        $(".idea").show();
      } else {
        hideIdeas(userInput);
      }
    })
  });

  function hideIdeas(userInput) {
    $(".idea").show();
    var re = new RegExp(userInput);
    h3s = $("h3");
    ps = $("div > p");

    $.each(h3s, function(key, value) {
      if (!re.test(value.innerHTML)) {
        ideaId = value.className;
        $("#idea-" + ideaId).hide();
      }
    });

    $.each(ps, function(key, value) {
      if (re.test(value.innerHTML)) {
        ideaId = value.className;
        $("#idea-" + ideaId).show();
      }
    });

  }

  function makeIdeas() {
    $.getJSON("/all")
    .then(function(data) {
      listIdeas(data);
    })
  }

  function listIdeas(ideas) {
    ideas.forEach(function(idea) {
      $("#idea-box").append(widgetHTML(idea));
    })
  }

  function widgetBody(idea) {
    return '<h3 class="' + idea.id + '">' + idea.title + '</h3>'
    + '<p class="'+ idea.id + '">' + idea.body + '</p>'
    + '<div>'
    + '<div>' + QUALITIES[idea.quality] + '</div>'
    + '<button type="button" class="btn glyphicon glyphicon-thumbs-up blue" id="idea-upgrade-' + idea.id + '" onclick="gradeIdea(' + idea.id + ',' + (idea.quality + 1) + ')"></button>'
    + '<button type="button" class="btn glyphicon glyphicon-thumbs-down blue" id="idea-downgrade-' + idea.id + '" onclick="gradeIdea(' + idea.id + ',' + (idea.quality - 1) + ')"></button>'
    + '</div>'
    + '<button type="button" class="btn btn-success" id="idea-edit-' + idea.id + '" onclick="editIdea(' + idea.id + ')">Edit</button>'
    + '<button type="button" class="btn btn-danger" id="idea-delete-' + idea.id + '" onclick="deleteIdea(' + idea.id +  ')">Delete</button>'
  }

  function widgetHTML(idea) {
    return '<div id=idea-' + idea.id + ' class="idea ' + idea.id + '">' +
      widgetBody(idea)
    + '</div>'
  }

  function save() {
    params = { idea: {
      title: $("#title").val(),
      body: $("#body").val()
    } }

    $.post("/ideas", params)
    .then(function(data) {
      $("#idea-box").prepend(widgetHTML(data));
      $("#title").val("");
      $("#body").val("");
    })
  }

  function editIdea(id) {
  }

  function gradeIdea(id, newGrade) {
    if (0 <= newGrade && newGrade < Object.keys(QUALITIES).length) {
      $.ajax({
        url: '/grade',
        type: 'PUT',
        data: { id: id, new: newGrade },
        success: function(result) {
          $("#idea-" + result.id).html(widgetBody(result))
        }
      });
    }
  }

  function deleteIdea(id) {
    $.ajax({
      url: '/ideas/' + id,
      type: 'DELETE',
      success: function(result) {
        $("#idea-" + id).remove();
      }
    });
  }
}
