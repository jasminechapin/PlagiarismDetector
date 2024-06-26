using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class AdventureGame : MonoBehaviour
{

    [SerializeField] Text textComponent;
    [SerializeField] State startingState;

    State state;

	// Use this for initialization
	void Start()
    {
        state = startingState;
        textComponent.text = state.GetStateStory();
	}
	
	// Update is called once per frame
	void Update()
    {
        ManageState();
	}

    private void ManageState()
    {
        var nextStates = state.GetNextStates();
        // Looooop.
        int index = 0;
        while (index < nextStates.Length) {
            if (Input.GetKeyDown(KeyCode.Alpha1 + index))
            {
                state = nextStates[index];
            }
            index++;
        }
        textComponent.text = state.GetStateStory();
    }
}