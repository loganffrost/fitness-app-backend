define({ "api": [  {    "type": "delete",    "url": "/exercises/:id",    "title": "Delete an exercise",    "name": "DeleteExercise",    "group": "Exercise",    "version": "0.0.0",    "filename": "routes/exercises.js",    "groupTitle": "Exercise"  },  {    "type": "delete",    "url": "/exercises/:exercise-id/comments/:comment-id",    "title": "Delete a comment of an exercise",    "name": "DeleteExerciseComment",    "group": "Exercise",    "version": "0.0.0",    "filename": "routes/exercises.js",    "groupTitle": "Exercise"  },  {    "type": "delete",    "url": "/exercises/:exercise-id/sets/:set-id",    "title": "Delete a set of an exercise",    "name": "DeleteExerciseSet",    "group": "Exercise",    "version": "0.0.0",    "filename": "routes/exercises.js",    "groupTitle": "Exercise"  },  {    "type": "get",    "url": "/exercises/:id",    "title": "Get a single exercise type",    "name": "GetExercise",    "group": "Exercise",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of the exercise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "note",            "description": "<p>Note of the exercise.</p>"          },          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "sets",            "description": "<p>Sets of the exercise.</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>User of the exercise.</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "exerciseType",            "description": "<p>Type of the exercise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/exercises.js",    "groupTitle": "Exercise"  },  {    "type": "get",    "url": "/exercises/:id/comments",    "title": "List comments of exercise",    "name": "GetExerciseComments",    "group": "Exercise",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "body",            "description": "<p>List of comments of an exercise.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "body.id",            "description": "<p>ID of the comment.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.text",            "description": "<p>Text of the comment.</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "body.user",            "description": "<p>User that posted the comment.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/exercises.js",    "groupTitle": "Exercise"  },  {    "type": "get",    "url": "/exercises/:id/sets",    "title": "List sets of exercise",    "name": "GetExerciseSets",    "group": "Exercise",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "body",            "description": "<p>List of sets of an exercise.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "body.id",            "description": "<p>ID of the set.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "body.numReps",            "description": "<p>Number of reps.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "body.weight",            "description": "<p>Weight.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "body.ExerciseId",            "description": "<p>ID of the corresponding exercise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/exercises.js",    "groupTitle": "Exercise"  },  {    "type": "get",    "url": "/exercises",    "title": "List exercises",    "name": "GetExercises",    "group": "Exercise",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "body",            "description": "<p>List of exercises.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "body.id",            "description": "<p>ID of the exercise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.note",            "description": "<p>Note of the exercise.</p>"          },          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "body.sets",            "description": "<p>Sets of the exercise.</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "body.user",            "description": "<p>User of the exercise.</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "body.exerciseType",            "description": "<p>Type of the exercise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/exercises.js",    "groupTitle": "Exercise"  },  {    "type": "patch",    "url": "/exercises/:id",    "title": "Edit an exercise",    "name": "PatchExercise",    "group": "Exercise",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "exerciseTypeName",            "description": "<p>Optional name of the exercise.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "note",            "description": "<p>Optional note of the exercise.</p>"          },          {            "group": "Parameter",            "type": "Object[]",            "optional": true,            "field": "sets",            "description": "<p>Optional sets of the exercise.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of the exercise type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the exercise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/exercises.js",    "groupTitle": "Exercise"  },  {    "type": "patch",    "url": "/exercises/:exercise-id/comments/:comment-id",    "title": "Edit a comment of an exercise",    "name": "PatchExerciseComment",    "group": "Exercise",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "text",            "description": "<p>Text of the comment.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/exercises.js",    "groupTitle": "Exercise"  },  {    "type": "patch",    "url": "/exercise/:exercise-id/sets/:set-id",    "title": "Edit a set of an exercise",    "name": "PatchExerciseSet",    "group": "Exercise",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": true,            "field": "numRep",            "description": "<p>Optional number of reps.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": true,            "field": "weight",            "description": "<p>Weight.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/exercises.js",    "groupTitle": "Exercise"  },  {    "type": "post",    "url": "/exercises",    "title": "Create an exercise",    "name": "PostExercise",    "group": "Exercise",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "exerciseTypeName",            "description": "<p>Name of the exercise.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "note",            "description": "<p>Optional note of the exercise.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "userId",            "description": "<p>ID of the user of the exercise.</p>"          },          {            "group": "Parameter",            "type": "Object[]",            "optional": false,            "field": "sets",            "description": "<p>Sets of the exercise.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of the exercise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "note",            "description": "<p>Note of the exercise.</p>"          },          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "sets",            "description": "<p>Sets of the exercise.</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>User of the exercise.</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "exerciseType",            "description": "<p>Type of the exercise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/exercises.js",    "groupTitle": "Exercise"  },  {    "type": "post",    "url": "/exercises/:id/comments",    "title": "Create a comment for an exercise",    "name": "PostExerciseComment",    "group": "Exercise",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "text",            "description": "<p>Text of the comment.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "userId",            "description": "<p>ID of the user posting the comment.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/exercises.js",    "groupTitle": "Exercise"  },  {    "type": "post",    "url": "/exercises/:id/sets",    "title": "Create a set for an exercise",    "name": "PostExerciseSet",    "group": "Exercise",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "numReps",            "description": "<p>Number of reps.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "weight",            "description": "<p>Weight.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/exercises.js",    "groupTitle": "Exercise"  },  {    "type": "delete",    "url": "/exercise-types/:id",    "title": "Delete an exercise type",    "name": "DeleteExerciseType",    "group": "ExerciseType",    "version": "0.0.0",    "filename": "routes/exercise-types.js",    "groupTitle": "ExerciseType"  },  {    "type": "get",    "url": "/exercise-types/:id",    "title": "Get a single exercise type",    "name": "GetExerciseType",    "group": "ExerciseType",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of the exercise type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the exercise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/exercise-types.js",    "groupTitle": "ExerciseType"  },  {    "type": "get",    "url": "/exercise-types",    "title": "List exercise types",    "name": "GetExerciseTypes",    "group": "ExerciseType",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "body",            "description": "<p>List of exercise types.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "body.id",            "description": "<p>ID of the exercise type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.name",            "description": "<p>Name of the exercise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/exercise-types.js",    "groupTitle": "ExerciseType"  },  {    "type": "patch",    "url": "/exercise-types/:id",    "title": "Edit an exercise type",    "name": "PatchExerciseType",    "group": "ExerciseType",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the exercise.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of the exercise type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the exercise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/exercise-types.js",    "groupTitle": "ExerciseType"  },  {    "type": "post",    "url": "/exercise-types",    "title": "Create an exercise type",    "name": "PostExerciseType",    "group": "ExerciseType",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the exercise.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of the exercise type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the exercise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/exercise-types.js",    "groupTitle": "ExerciseType"  },  {    "type": "delete",    "url": "/groups/:id",    "title": "Delete a group",    "name": "DeleteGroup",    "group": "Group",    "version": "0.0.0",    "filename": "routes/groups.js",    "groupTitle": "Group"  },  {    "type": "delete",    "url": "/groups/:group-id/members/:user-id",    "title": "Remove a member from a group",    "name": "DeleteGroupMember",    "group": "Group",    "version": "0.0.0",    "filename": "routes/groups.js",    "groupTitle": "Group"  },  {    "type": "get",    "url": "/groups",    "title": "Get a single group",    "name": "GetGroup",    "group": "Group",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of the group.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the group.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/groups.js",    "groupTitle": "Group"  },  {    "type": "get",    "url": "/groups/:id/exercises",    "title": "List exercises of a group",    "name": "GetGroupExercises",    "group": "Group",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "body",            "description": "<p>List of exercises of a group.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "body.id",            "description": "<p>ID of the exercise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.note",            "description": "<p>Note of the exercise.</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "body.user",            "description": "<p>User of the exercise.</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "body.sets",            "description": "<p>Sets of the exercise.</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "body.exerciseType",            "description": "<p>Type of the exercise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/groups.js",    "groupTitle": "Group"  },  {    "type": "get",    "url": "/groups/:id/members",    "title": "List members of a group",    "name": "GetGroupMembers",    "group": "Group",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "body",            "description": "<p>List of members of a group.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "body.id",            "description": "<p>ID of the user.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.name",            "description": "<p>Name of the user.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/groups.js",    "groupTitle": "Group"  },  {    "type": "get",    "url": "/groups",    "title": "List groups",    "name": "GetGroups",    "group": "Group",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "body",            "description": "<p>List of groups.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "body.id",            "description": "<p>ID of the group.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.name",            "description": "<p>Name of the group.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/groups.js",    "groupTitle": "Group"  },  {    "type": "patch",    "url": "/groups/:id",    "title": "Edit a group",    "name": "PatchGroup",    "group": "Group",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the group.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of the group.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the group.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/groups.js",    "groupTitle": "Group"  },  {    "type": "post",    "url": "/groups",    "title": "Create a group",    "name": "PostGroup",    "group": "Group",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the group.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of the group.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the group.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/groups.js",    "groupTitle": "Group"  },  {    "type": "post",    "url": "/groups/:id/members",    "title": "Add a member to a group",    "name": "PostGroupMember",    "group": "Group",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of the user.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/groups.js",    "groupTitle": "Group"  },  {    "type": "delete",    "url": "/users/:id",    "title": "Delete an user",    "name": "DeleteUser",    "group": "User",    "version": "0.0.0",    "filename": "routes/users.js",    "groupTitle": "User"  },  {    "type": "get",    "url": "/users/:id",    "title": "Get a single user",    "name": "GetUser",    "group": "User",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of user.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the user.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/users.js",    "groupTitle": "User"  },  {    "type": "get",    "url": "/users/:id/exercises",    "title": "List exercises of user",    "name": "GetUserExercises",    "group": "User",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "body",            "description": "<p>List of exercises of user.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "body.id",            "description": "<p>ID of exercise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.note",            "description": "<p>Note of exercise.</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "body.sets",            "description": "<p>Sets of exercise.</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "body.user",            "description": "<p>User of exercise.</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "body.exerciseType",            "description": "<p>Type of exercise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/users.js",    "groupTitle": "User"  },  {    "type": "get",    "url": "/users/:id/groups",    "title": "List groups of user",    "name": "GetUserGroups",    "group": "User",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "body",            "description": "<p>List of groups of user.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "body.id",            "description": "<p>ID of user.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.name",            "description": "<p>Name of the user.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "body.updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/users.js",    "groupTitle": "User"  },  {    "type": "patch",    "url": "/users/:id",    "title": "Edit an user",    "name": "PatchUser",    "group": "User",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the user.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of the exercise type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the exercise.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/users.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/users",    "title": "Create an user",    "name": "PostUser",    "group": "User",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the user.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of user.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the user.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>Date of creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>Date of last update.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/users.js",    "groupTitle": "User"  }] });
