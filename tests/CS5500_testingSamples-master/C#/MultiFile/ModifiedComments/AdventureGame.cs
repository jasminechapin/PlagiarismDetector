using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

// Class for the AdventureGame. Will interface with the other State file.
public class AdventureGame : MonoBehaviour
{

    [SerializeField] Text textComponent;
    [SerializeField] State startingState;

    State state;

	void Start()
    {
        state = startingState;
        textComponent.text = state.GetStateStory();
	}
// Wow.
// Wow.
// Wow.

	void Update()
    {
        ManageState();
	}

    private void ManageState()
    {
        // Wow.
        var nextStates = state.GetNextStates();
        for (int index = 0; index < nextStates.Length; index++)
        {
            if (Input.GetKeyDown(KeyCode.Alpha1 + index))
            {
                state = nextStates[index];
            }
        }
        // Update text component.
        textComponent.text = state.GetStateStory();
    }
}