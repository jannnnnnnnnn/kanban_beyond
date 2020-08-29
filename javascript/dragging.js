// js

var tasks = $(".tasks");
var drop1 = $("#drop1");
var drop2 = $("#drop2");

var height = tasks.outerHeight();
var margin = 50;
var gutter = 15;

// tasks.each(function (i, task) {
//   // Setup tasks with some data
//   task = $(task);
//   task.data({ index: i, zone: drop1 });

//   TweenLite.set(task, {
//     x: margin,
//     y: margin + i * gutter + i * height,
//     backgroundColor: Math.random() * 0xe8d4cd,
//   });
// });

// Make tasks draggable
Draggable.create(tasks, {
  bounds: ".bounds",
  onDrag: onDrag,
  onDragEnd: onDragEnd,
  onDragStart: onDragStart,
  onPress: onPress,
  onRelease: onRelease,
});

function onDrag(event) {
  var task = $(this.target);
  var zone = getZone(task);

  // task is not in the zone it started from
  if (zone && zone !== task.data("zone")) {
    // Stop the draggable so the position doesn't
    // get messed up when appeneding task to new zone
    this.endDrag(event);
    changeZone(task, zone);
    this.startDrag(event);
  }

  // Reorder tasks. True parameter tells it to ignore
  // tasks that are being dragged
  if (!zone) reorderTasks(true);
  if (hitTest(task)) reorderTasks();
}

function onDragStart() {
  $(this.target).addClass("dragging");
}

function onDragEnd() {
  var task = $(this.target);
  var zone = getZone(task);

  if (zone && zone !== task.data("zone")) {
    changeZone(task, zone);
  }

  $(this.target).removeClass("dragging");
  hitTest(this.target);
  reorderTasks();
}

function onPress() {
  TweenLite.to(this.target, 0.3, { opacity: 0.75, scale: 0.9 });
}

function onRelease() {
  hitTest(this.target);
  reorderTasks();
  TweenLite.to(this.target, 0.3, { opacity: 1, scale: 1 });
}

function changeZone(task, zone) {
  // Change task's data for zone
  task.data("zone", zone);

  // Find position of task and zone
  var rect1 = task[0].getBoundingClientRect();
  var rect2 = zone[0].getBoundingClientRect();

  zone.append(task);

  // Update task with new coords
  TweenLite.set(task, {
    x: rect1.left - rect2.left,
    y: rect1.top - rect2.top,
  });
}

function getZone(task) {
  // Returns the zone the task is in
  var zone = Draggable.hitTest(task, drop1)
    ? drop1
    : Draggable.hitTest(task, drop2)
    ? drop2
    : null;
  return zone;
}

function hitTest(task) {
  var target;

  // Hit test tasks that aren't moving or being dragged
  $(".task:not(.dragging, .moving)").each(function (i, element) {
    if (Draggable.hitTest(task, element)) {
      target = element;
      return false;
    }
  });

  if (target) changePosition(task, target);
  return target;
}

function reorderTasks(dragging) {
  var query = dragging ? ".task:not(.dragging)" : ".task";
  drop1.children(query).each(moveTask);
  drop2.children(query).each(moveTask);
}

function moveTask(index, task, tween) {
  task = $(task);
  task.data("index", index);

  if (task.hasClass("dragging")) return;
  task.addClass("moving");

  TweenLite.to(task, 0.25, {
    x: margin,
    y: margin + index * gutter + index * height,
    onComplete: function () {
      task.removeClass("moving");
    },
  });
}

function changePosition(task1, task2) {
  task1 = $(task1);
  task2 = $(task2);

  // Changes tasks position on the DOM which is used to
  // index and find the position to move to
  task1.data("index") > task2.data("index")
    ? task1.insertBefore(task2)
    : task1.insertAfter(task2);
}
