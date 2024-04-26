using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class AdventureGame : MonoBehaviour
{

    [SerializeField] Text textComponent;
    [SerializeField] State startingState;

    private void ManageState()
    {
        var nextStates = state.GetNextStates();
        // Looooop.
        for (int index = 0; index < nextStates.Length; index++)
        {
            if (Input.GetKeyDown(KeyCode.Alpha1 + index))
            {
                state = nextStates[index];
            }
        }
        textComponent.text = state.GetStateStory();
    }

    State state;

	// Update is called once per frame
	void Update()
    {
        ManageState();
	}

	// Use this for initialization
	void Start()
    {
        state = startingState;
        textComponent.text = state.GetStateStory();
	}
}